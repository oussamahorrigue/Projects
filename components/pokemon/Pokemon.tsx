import React from "react";
import {
  Pokemon,
  Pokemon__name,
  Pokemon__image,
  Pokemon_types,
  Span,
} from "./Style-pokemon";

export function Pokemons({ pokemons, PokemonSearched }) {
  const PokeList = pokemons
    .filter((pokemo) => {
      return (
        pokemo.name.toLowerCase().indexOf(PokemonSearched.toLowerCase()) >= 0
      );
    })
    .map((pokemo) => (
      <Pokemon key={pokemo.id}>
        <Pokemon__name>
          <p>{pokemo.name}</p>
        </Pokemon__name>
        <Pokemon_types>
          {pokemo.types.map((type: string[], index: number) => (
            <Span bg={type} key={index}>
              {type}
            </Span>
          ))}
        </Pokemon_types>
        <Pokemon__image>
          <img src={pokemo.image} alt={pokemo.name} />
        </Pokemon__image>
      </Pokemon>
    ));

  return <div>{PokeList}</div>;
}
