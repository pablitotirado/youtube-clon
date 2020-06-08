import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { GlobalStyle } from "../global-styles";
import store from "../store";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <title>Youtube</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
