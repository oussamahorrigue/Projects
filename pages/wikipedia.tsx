import Search from "../components/wikipedia/Search";
import { Container } from "../styles/style-wikipedia";
import Layout from "../components/NavBar/WikiLayout";
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
