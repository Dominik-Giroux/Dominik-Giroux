import { getMenu } from "../libs/menus";
import { getSection } from "../libs/sections";
import Hero from "../components/sections/hero";
import Heading from "../components/sections/Heading";
import IconsList from "../components/sections/iconsList";
import Clients from "../components/sections/clients";

export default function Home({ context, sections }) {
  return (
    <main>
      <Hero context={context} hero={sections.hero} />
      <Heading context={context} heading={sections.heading} />
      <IconsList context={context} list={sections.iconsList} />
      <Clients context={context} clients={sections.clients} />
    </main>
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
    }
  };
  const menu = await getMenu("main");
  const sections = {
    hero: await getSection("hero"),
    heading: await getSection("heading"),
    iconsList: await getSection("iconsList"),
    clients: [
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
    ]
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
