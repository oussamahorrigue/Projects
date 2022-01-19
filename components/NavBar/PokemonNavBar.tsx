import Link from "next/link";
import Head from "next/head";
const PokemonLayout = () => {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <link
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="ui pointing menu">
        <Link href="/">
          <a className="item">SpaceX</a>
        </Link>
        <Link href="/videoBrowser">
          <a className="item">videoBrowser</a>
        </Link>
        <Link href="wikipedia">
          <a className="item">Wikipedia</a>
        </Link>
        <Link href="pokemon">
          <a className="item">Pokemon</a>
        </Link>
      </div>
    </>
  );
};
export default PokemonLayout;
