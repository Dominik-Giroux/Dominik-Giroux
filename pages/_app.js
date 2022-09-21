import "../styles/globals.css";
import Meta from "../components/meta";
import Menu from "../components/menu";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta {...pageProps} />
      <Menu {...pageProps} />
      <Component {...pageProps} />
      <Newsletter {...pageProps} />
      <Footer {...pageProps} />
      <Toaster position="bottom-right" />
    </>
  );
}

export default MyApp;
