import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="relative">
          {/* <div className="absolute -top-48 -z-10 h-[100vh] w-full animate-tilt rounded-full bg-gradient-to-br from-teal-500 to-purple-500  blur-lg"></div> */}
          {/* <div className="absolute -top- right-0 -z-10 mx-auto h-2/4 w-full max-w-7xl animate-tilt rounded-full bg-gradient-to-r from-teal-500 to-purple-500 py-12 blur-2xl"></div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
