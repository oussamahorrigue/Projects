import Search from "../components/wikipedia/Search";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wikipedia</title>
        <link
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          rel="stylesheet"
        />
      </Head>
      <Search />
    </>
  );
}
