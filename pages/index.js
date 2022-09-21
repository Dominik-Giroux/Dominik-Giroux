import { getMenu } from "../libs/menus";
import { getPage } from "../libs/pages";
import { getSection } from "../libs/sections";
import Hero from "../components/sections/hero";
import Title from "../components/sections/title";
import IconsList from "../components/sections/iconsList";
import Clients from "../components/sections/clients";

export default function Home({ context, sections }) {
  return (
    <>
      <main className="relative animate-slideTop text-center">
        <Hero context={context} hero={sections.hero} />
        <Title context={context} title={sections.title} />
        <IconsList context={context} list={sections.iconsList} />
        <Clients context={context} clients={sections.clients} />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const meta = {
    title: {
      en: "Dominik Giroux - Digital Marketing Expert",
      fr: "Dominik Giroux - Expert en Marketing Digital"
    },
    description: {
      en: "Driven by purpose, making the web a better place one website at a time with innovative web design and digital marketing strategies.",
      fr: "Poussé par la passion, j'innove le web un site à la fois avec ma créativité et des stratégies de marketing numérique novatrice."
    },
    slug: {
      en: "",
      fr: ""
    }
  };
  const menu = await getMenu("main");
  const page = await getPage("home");
  const hero = await getSection("hero");
  const title = await getSection("title");
  const iconsList = await getSection("iconsList");
  const clients = [
    {
      alt: "Peertracks",
      src: "/img/peertracks.png"
    },
    {
      alt: "SounDAC",
      src: "/img/soundac.png"
    },
    {
      alt: "Industrie Lassonde",
      src: "/img/industrie-lassonde.png"
    },
    {
      alt: "Wolfers Kluwer",
      src: "/img/wolters-kluwer.png"
    }
  ];
  const sections = {
    hero,
    title,
    iconsList,
    clients
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
