import React from "react";
import { Pokemons } from "./Pokemon";
import { Container } from "./Style-pokemon";
const PokemonsContainer = ({ pokemons }) => {
  return (
    <div className="ui container" style={{ width: "1500px" }}>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemons key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
};
export default PokemonsContainer;
