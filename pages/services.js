import Head from "next/head";
import IconsList from "../components/sections/iconsList";
import { getMenu } from "../libs/menus";
import { getPage } from "../libs/pages";
import { getSection } from "../libs/sections";

export default function Home({ context, page, sections }) {
  return (
    <>
      <main className="text-center">
        <section className="mx-auto max-w-7xl py-8">
          <h1 className="animate-fadeIn bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent">
            {page.title[context.locale]}
          </h1>
        </section>
        <IconsList context={context} list={sections.iconsList} />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const meta = {
    title: {
      en: "Services",
      fr: "Services"
    },
    description: {
      en: "Dominik Giroux is a digital marketing expert and web designer based in Montreal, Canada.",
      fr: "Dominik Giroux est un expert en marketing numérique et web designer basé à Montréal, Canada."
    },
    slug: {
      en: "/services",
      fr: "/services"
    }
  };
  const menu = await getMenu("main");
  const page = await getPage("services");
  const iconsList = await getSection("iconsList");
  const sections = {
    iconsList
  };

  return {
    props: {
      context,
      meta,
      menu,
      page,
      sections
    }
  };
}
