import React, { useEffect, useState } from "react";
import PokemonsContainer from "../components/pokemon/PokemonsContainer";
import { Chain } from "../zeus";
import Link from "next/link";
import Head from "next/head";
import { Pokemons } from "../components/pokemon/Pokemon";
import PokemonNavBar from "../components/NavBar/PokemonNavBar";

const chain = Chain("https://graphql-pokemon2.vercel.app");

interface IState {
  name?: string;
  types?: string[];
  image?: string;
  id: string;
}

const Pokemon: React.FC = () => {
  const [pokemons, setPokemons] = useState<IState[]>([]);
  const [PokemonSearched, setPokemonSearched] = useState<string>("");

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

    getPokemons(200);
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
      <PokemonNavBar setPokemonSearched={setPokemonSearched} />
      <PokemonsContainer pokemons={pokemons} />
    </>
  );
};
export default Pokemon;
