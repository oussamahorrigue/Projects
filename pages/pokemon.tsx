import React, { useEffect, useState } from "react";
import PokemonsContainer from "../components/pokemon/PokemonsContainer";
import PokemonLayout from "../components/NavBar/PokemonNavBar";
import { Chain } from "../zeus";
import Head from "next/head";

const chain = Chain("https://graphql-pokemon2.vercel.app");

interface Pokemon {
  name?: string;
  types?: string[];
  image?: string;
  id: string;
}

const Pokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async (howMany: number) => {
      const resp = await chain("query")({
        pokemons: [
          { first: howMany },
          { image: true, name: true, types: true, id: true },
        ],
      });
      if (resp) {
        setPokemons(resp.pokemons);
        console.log(resp);
      }
    };
    getPokemons(151);
  }, []);

  return (
    <>
      <Head>
        <title>Pokemon</title>
        <link
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          rel="stylesheet"
        />
      </Head>
      <PokemonLayout />
      <PokemonsContainer pokemons={pokemons} />
    </>
  );
};
export default Pokemon;
