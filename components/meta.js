import Head from "next/head";

export default function Meta({ context, meta }) {
  const { title, description, slug, error } = meta
    ? meta
    : {
        title: {
          en: "Dominik Giroux",
          fr: "Dominik Giroux"
        },
        description: {
          en: "Dominik Giroux is a digital marketing expert and web designer based in Montreal, Canada.",
          fr: "Dominik Giroux est un expert en marketing numérique et web designer basé à Montréal, Canada."
        }
      };
  const domain = process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.DOMAIN;
  const lang = context.locale != context.defaultLocale ? `/${context.locale}` : "";
  return (
    <Head>
      <title>{title[context.locale]}</title>
      <meta name="description" content={description[context.locale]} />
      <link rel="icon" href="/favicon.ico" />
      {slug && !error && (
        <>
          <link rel="canonical" href={`${domain}${lang}${slug[context.locale]}`} />
          <link rel="alternate" hrefLang="en" href={`${domain}${slug["en"]}`} />
          <link rel="alternate" hrefLang="fr" href={`${domain}/fr${slug["fr"]}`} />
        </>
      )}
    </Head>
  );
}
