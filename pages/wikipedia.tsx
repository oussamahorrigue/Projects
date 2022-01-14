import Search from "../components/wikipedia/Search";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wikipedia</title>
      </Head>
      <Search />
    </>
  );
}
