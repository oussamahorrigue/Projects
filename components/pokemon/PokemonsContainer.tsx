import React from "react";
import { Pokemons } from "./Pokemon";
import { Container } from "./Style-pokemon";

const PokemonsContainer = ({ pokemons, PokemonSearched }) => {
  return (
    <Container>
      <Pokemons pokemons={pokemons} PokemonSearched={PokemonSearched} />
    </Container>
  );
};
export default PokemonsContainer;
