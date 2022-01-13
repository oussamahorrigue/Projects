import React from "react";
import App from "../components/VideoBrowser/App";
import { Container } from "../styles/style-video";
import Head from "next/head";

const VideoBrowser = () => {
  return (
    <>
      <Head>
        <title>Video Browser</title>
      </Head>
      <App />
    </>
  );
};
export default VideoBrowser;
