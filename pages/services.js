import Head from "next/head";
import { getMenu } from "../libs/menus";
import { getPage } from "../libs/pages";

export default function Home({ context, menu, page }) {
  return (
    <>
      <Head>
        <title>Dominik Giroux</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="alternate" hreflang="en" href="/about" />
        <link rel="alternate" hreflang="fr" href="/fr/a-propos" /> */}
      </Head>

      <main className="text-center">
        <section className="section-container">
          <h1 className="animate-fadeIn text-5xl font-black">{page.title[context.locale]}</h1>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const menu = await getMenu("main");
  const page = await getPage("services");
  return {
    props: {
      context,
      menu,
      page
    }
  };
}
