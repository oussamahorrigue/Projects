import React from "react";
import { Pokemons } from "./Pokemon";
import { Container } from "./Style-pokemon";

const PokemonsContainer = ({ pokemons, PokemonSearched }) => {
  return (
    <div>
      <Pokemons pokemons={pokemons} PokemonSearched={PokemonSearched} />
    </div>
  );
};
export default PokemonsContainer;
