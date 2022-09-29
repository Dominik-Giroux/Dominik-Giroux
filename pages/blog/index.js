import Link from "next/link";
import Image from "next/image";
import { getMenu } from "../../libs/menus";
import { getLatestPosts } from "../../libs/api";

export default function Blog({ title, description, posts }) {
  return (
    <>
      <main className="px-4 text-center md:px-6">
        <section className="mx-auto max-w-7xl  pb-16">
          <h1 className="mx-auto max-w-4xl bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text pt-16 text-3xl font-extrabold text-transparent md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500 sm:mt-4 md:text-xl">{description}</p>

          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, i) => (
              <div key={`post-${i}`} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <Image
                        className="h-48 w-full object-cover hover:cursor-pointer"
                        src={post.featured ? post.featured : "/img/posts/featured-default.jpg"}
                        alt={post.title}
                        width={516}
                        height={240}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6 text-left">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">{post.tags ? post.tags : "Blog"}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <a className="mt-2 block">
                        <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                      </a>
                    </Link>
                  </div>

                  <div className="mt-6 flex items-center">
                    {post.author && post.authorImg && (
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 overflow-hidden rounded-full">
                          <span className="sr-only">{post.author}</span>
                          <Image src={post.authorImg} alt={post.author} width={75} height={75} layout="responsive" />
                        </div>
                      </div>
                    )}
                    <div className="ml-3 text-left">
                      {post.author && (
                        <p className="bg-gradient-to-tr from-teal-500 to-purple-500 bg-clip-text text-sm font-bold text-transparent">
                          {post.author}
                        </p>
                      )}
                      {post.datetime && post.date && (
                        <div className="flex space-x-1 text-xs text-gray-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          {post.readTime && <span>{post.readTime} read</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const meta = {
    title: {
      en: "Business Intelligence, Web Design & Digital Marketing Blog",
      fr: "Blog sur l'intelligence d'affaires, le design web & le marketing digital"
    },
    description: {
      en: "Get my insights on Business Intelligence, Web Design & Digital Marketing! I share tips to market a sucessful online business.",
      fr: "Mes astuces et conseils sur l'intelligence d'affaire, la conception de site web et le marketing numérique pour avoir du succès en ligne."
    },
    slug: {
      en: "/blog",
      fr: "/blog"
    }
  };
  const menu = await getMenu("main");
  const posts = await getLatestPosts(context);
  return {
    props: {
      context,
      title: meta.title[context.locale],
      description: meta.description[context.locale],
      menu,
      posts
    }
  };
}
