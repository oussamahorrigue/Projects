import React, { useEffect, useState } from "react";
import PokemonsContainer from "../components/pokemon/PokemonsContainer";
import { Chain } from "../zeus";
import Link from "next/link";
import Head from "next/head";
import { Pokemons } from "../components/pokemon/Pokemon";

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
  const [DataByName, setDataByName] = useState<IState[]>([]);

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

  /*
  const getPokemonByName = async (pokemonName: string) => {
    const data = await chain("query")({
      pokemon: [
        { name: pokemonName },
        { image: true, name: true, types: true, id: true },
      ],
    });
    if (data) {
      setDataByName(data.pokemon);
      console.log(data);
    }
  };
  */

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
        <div className="ui action input">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setPokemonSearched(e.target.value)}
          />
          <button
            className="ui button"
            /*onClick={getPokemonByName(PokemonSearched)}*/
          >
            Search
          </button>
        </div>
      </div>
      <PokemonsContainer pokemons={pokemons} />
    </>
  );
};
export default Pokemon;
