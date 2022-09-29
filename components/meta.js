import Head from "next/head";
import { useRouter } from "next/router";

export default function Meta({ title, description }) {
  const router = useRouter();
  const domain = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.dominikgiroux.com";
  const lang = router.locale != router.defaultLocale ? `/${router.locale}` : "";
  const path = router.asPath.split("?")[0] == "/" ? "" : router.asPath.split("?")[0];

  return (
    <Head>
      <title>{title ? title : "Dominik Giroux"}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={`${domain}${lang}${path}`} />
      <link rel="alternate" hrefLang="en" href={`${domain}${path}`} />
      {router.locales.map(
        loc =>
          loc != router.defaultLocale && (
            <link key={`alternate-${loc}`} rel="alternate" hrefLang={loc} href={`${domain}/${loc}${path}`} />
          )
      )}
    </Head>
  );
}
