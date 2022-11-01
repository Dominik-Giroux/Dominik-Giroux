import IconsList from "../components/sections/iconsList";
import { getMenu } from "../libs/menus";
import { getSection } from "../libs/sections";

export default function Home({ context, title, sections }) {
  return (
    <>
      <main className="text-center">
        <section className="mx-auto max-w-7xl py-8">
          <h1 className=" bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-6xl">
            {title}
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
    }
  };
  const menu = await getMenu("main");
  const iconsList = await getSection("iconsList");
  const sections = {
    iconsList
  };

  return {
    props: {
      context,
      meta,
      menu,
      sections
    }
  };
}
