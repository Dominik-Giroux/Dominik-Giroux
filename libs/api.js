import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";

const postsDirectory = join(process.cwd(), "posts");

export function getPostPaths() {
  return fs.readdirSync(postsDirectory);
}

export async function getPost({ slug, locale }) {
  // Get file content
  const fullPath = join(postsDirectory, `${slug}.${locale}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Convert content markdown to html
  const { data, content } = matter(fileContents);
  const html = await markdownToHtml(content || "");

  return {
    ...data,
    slug,
    content: html
  };
}

export function getPostPath({ locales, defaultLocale, path }) {
  // Set the base locales to the app default
  let pathLocale = defaultLocale;

  // Check for each existing locales if there's a path with it
  locales.forEach(locale => {
    if (path.includes(`.${locale}.md`)) {
      pathLocale = locale; // Set the current path locale
    }
  });

  // Get Path Slug
  const slug = path.replace(`.${pathLocale}.md`, "");

  // Return Paths for GetStaticPaths
  return {
    params: {
      slug
    },
    locale: pathLocale
  };
}

export function getAllPaths({ locales, defaultLocale }) {
  const paths = getPostPaths();
  return paths.map(path => getPostPath({ locales, defaultLocale, path }));
}

export async function getLatestPosts({ locale }) {
  const paths = getPostPaths().filter(path => path.includes(`.${locale}.md`));

  const posts = (
    await Promise.all(paths.map(path => getPost({ locale, slug: path.replace(`.${locale}.md`, "") })))
  ).sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}
