import "../styles/globals.css";
import Meta from "../components/meta";
import Menu from "../components/menu";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta {...pageProps} />
      <Menu {...pageProps} />
      <Component {...pageProps} />
      <Newsletter {...pageProps} />
      <Footer {...pageProps} />
    </>
  );
}

export default MyApp;
