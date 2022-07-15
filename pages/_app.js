import "../styles/globals.css";
import Menu from "../components/menu";
import Newsletter from "../components/newsletter";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu {...pageProps} />
      <Component {...pageProps} />
      <Newsletter {...pageProps} />
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
}

export default MyApp;
