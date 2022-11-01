import Image from "next/image";
import { getMenu } from "../../libs/menus";
import { getAllPaths, getPost } from "../../libs/api";

// The page for each post
export default function Post({ context, post }) {
  return (
    <main className="py-8">
      <section className="prose mx-auto max-w-prose px-4 md:px-6 lg:prose-lg">
        <p className="text-sm font-medium text-indigo-600">{post.tags ? post.tags : "Blog"}</p>
        <h1 className="mb-4  bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text text-transparent">
          {post.title}
        </h1>
        <Image
          className="h-auto w-full rounded-lg object-cover"
          src={post.featured ? post.featured : "/img/posts/featured-default.jpg"}
          alt={post.title}
          width={1200}
          height={500}
          priority
        />

        {post.datetime && post.date && (
          <p className="space-x-2 text-sm italic text-gray-500">
            <time dateTime={post.datetime}>{post.date}</time>
            <span aria-hidden="true">&middot;</span>
            {post.readTime && <span>{post.readTime} read</span>}
          </p>
        )}

        <article className="" dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </section>
      <section className="mt-10 flex flex-col items-center justify-center">
        {post.author && post.authorImg && (
          <div className="flex-shrink-0">
            <div className="h-20 w-20 overflow-hidden rounded-full">
              <span className="sr-only">{post.author}</span>
              <Image src={post.authorImg} alt={post.author} width={175} height={175} />
            </div>
          </div>
        )}
        {post.author && (
          <p className="mt-2 bg-gradient-to-tr from-teal-500 to-purple-500 bg-clip-text text-sm font-bold text-transparent">
            {post.author}
          </p>
        )}
      </section>
    </main>
  );
}

export async function getStaticPaths({ locales, defaultLocale }) {
  return {
    paths: getAllPaths({ locales, defaultLocale }),
    fallback: false
  };
}

export async function getStaticProps({ locale, params }) {
  const post = await getPost({ slug: params.slug, locale });
  const meta = { title: post.title, description: post.description };
  const menu = await getMenu("main");
  const context = { locale, params };
  return {
    props: {
      context,
      menu,
      meta,
      post
    }
  };
}
