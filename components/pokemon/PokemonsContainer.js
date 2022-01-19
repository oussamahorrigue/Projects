import React from "react";
import { useQuery } from "@apollo/client";
import { Pokemons } from "./Pokemon";
import { GET_POKEMONS } from "./get-pokemons";
import { Container } from "./Style-pokemon";
export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 100 },
  });

  return (
    <Container>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemons key={pokemon.id} pokemon={pokemon} />
        ))}
    </Container>
  );
}
