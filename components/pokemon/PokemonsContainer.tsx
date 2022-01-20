import React from "react";
import { Pokemons } from "./Pokemon";
import { Container, Pokemon } from "./Style-pokemon";

const PokemonsContainer = ({ pokemons }) => {
  return (
    <div className="ui container" style={{ width: "1500px" }}>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemons key={pokemon.id} pokemon={pokemon} types={pokemon.types} />
        ))}
    </div>
  );
};
export default PokemonsContainer;
