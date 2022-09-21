import { getMenu } from "../libs/menus";
import { getPage } from "../libs/pages";

export default function About({ context, page }) {
  return (
    <>
      <main className="text-center">
        <section className="mx-auto max-w-7xl animate-fadeIn pb-16">
          <h1 className="bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text py-16 text-6xl font-extrabold text-transparent">
            {page.title[context.locale]}
          </h1>
          <p className="font-black text-zinc-600">{context.locale == "en" ? "Comming soon" : "Bientot disponible"}</p>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const meta = {
    title: {
      en: "About - Dominik Giroux",
      fr: "À Propos - Dominik Giroux"
    },
    description: {
      en: "Dominik Giroux is a digital marketing expert and web designer based in Montreal, Canada.",
      fr: "Dominik Giroux est un expert en marketing numérique et web designer basé à Montréal, Canada."
    },
    slug: {
      en: "/about",
      fr: "/about"
    }
  };
  const menu = await getMenu("main");
  const page = await getPage("about");
  return {
    props: {
      context,
      meta,
      menu,
      page
    }
  };
}
