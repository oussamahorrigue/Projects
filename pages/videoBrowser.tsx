import React from "react";
import App from "../components/VideoBrowser/App";
import Head from "next/head";

const VideoBrowser = () => {
  return (
    <>
      <Head>
        <title>Video Browser</title>
        <link
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          rel="stylesheet"
        />
      </Head>
      <App />
    </>
  );
};
export default VideoBrowser;
