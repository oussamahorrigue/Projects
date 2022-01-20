import React from "react";
import {
  Pokemon,
  PokemonName,
  BoxImage,
  Pokemon__meta,
  BoxName,
  PokemonTypeSpan,
  PokemonType,
} from "./Style-pokemon";

export function Pokemons({ pokemons, PokemonSearched }) {
  const PokeList = pokemons
    .filter((pokemo) => {
      return (
        pokemo.name.toLowerCase().indexOf(PokemonSearched.toLowerCase()) >= 0
      );
    })
    .map((pokemo) => (
      <Pokemon key={pokemo.id} style={{ width: "13%", height: "17rem" }}>
        <BoxName>
          <PokemonName>{pokemo.name}</PokemonName>
        </BoxName>
        <PokemonType>
          {pokemo.types.map((type: string[], index: number) => (
            <PokemonTypeSpan key={index}>{type}</PokemonTypeSpan>
          ))}
        </PokemonType>
        <BoxImage>
          <img src={pokemo.image} alt={pokemo.name} style={{ width: "40%" }} />
        </BoxImage>
      </Pokemon>
    ));

  return <div>{PokeList}</div>;
}
