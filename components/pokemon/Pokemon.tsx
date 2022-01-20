import React from "react";
import {
  Pokemon,
  Pokemon_Image,
  Pokemon__meta,
  PokemonName,
} from "./Style-pokemon";
interface Pokemon {
  name?: string;
  types?: string[];
  image?: string;
  id: string;
}
export function Pokemons({ pokemon }) {
  return (
    <Pokemon>
      <div className="pokemon__name">
        <PokemonName>{pokemon.name}</PokemonName>
      </div>
      <Pokemon__meta>
        <span>{pokemon.types}</span>
      </Pokemon__meta>
      <Pokemon_Image>
        <img src={pokemon.image} alt={pokemon.name} />
      </Pokemon_Image>
      <div></div>
    </Pokemon>
  );
}
