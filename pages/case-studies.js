import { getMenu } from "../libs/menus";

export default function CaseStudies({ context, title }) {
  return (
    <>
      <main className="text-center">
        <section className="mx-auto max-w-7xl  pb-16">
          <h1 className="bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text py-16 text-6xl font-extrabold text-transparent">
            {title}
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
      en: "Case studies",
      fr: "Études de cas"
    },
    description: {
      en: "Dominik Giroux is a digital marketing expert and web designer based in Montreal, Canada.",
      fr: "Dominik Giroux est un expert en marketing numérique et web designer basé à Montréal, Canada."
    }
  };
  const menu = await getMenu("main");
  return {
    props: {
      context,
      title: meta.title[context.locale],
      description: meta.description[context.locale],
      menu
    }
  };
}
