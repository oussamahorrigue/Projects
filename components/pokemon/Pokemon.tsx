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
interface Pokemon {
  name?: string;
  types?: string[];
  image?: string;
  id: string;
}
export function Pokemons({ pokemon, types }) {
  return (
    <Pokemon style={{ width: "12%", height: "17rem" }}>
      <div>
        <BoxName>
          <PokemonName>{pokemon.name}</PokemonName>
        </BoxName>
        <PokemonType>
          {types.map((type: string[], index: number) => (
            <PokemonTypeSpan key={index}>{type}</PokemonTypeSpan>
          ))}
        </PokemonType>
        <BoxImage>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            style={{ width: "70%" }}
          />
        </BoxImage>
      </div>
    </Pokemon>
  );
}
