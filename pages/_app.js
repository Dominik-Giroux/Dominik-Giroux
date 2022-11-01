import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../styles/globals.css";
import Meta from "../components/meta";
import Menu from "../components/menu";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin]
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {pageProps.meta && <Meta {...pageProps} />}
      {pageProps.menu && <Menu {...pageProps} />}
      <Component {...pageProps} />
      <Newsletter {...pageProps} />
      {pageProps.menu && <Footer {...pageProps} />}
    </>
  );
}

export default MyApp;
