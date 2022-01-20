import React from "react";
import { Pokemons } from "./Pokemon";
import { Container, Pokemon } from "./Style-pokemon";

const PokemonsContainer = ({ pokemons, PokemonSearched }) => {
  return (
    <div className="ui container" style={{ width: "1500px" }}>
      <Pokemons pokemons={pokemons} PokemonSearched={PokemonSearched} />
    </div>
  );
};
export default PokemonsContainer;
