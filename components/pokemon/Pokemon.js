import React from "react";
import { Pokemon, Pokemon__name_P, Pokemon_Image } from "./Style-pokemon";

export function Pokemons({ pokemon }) {
  return (
    <Pokemon>
      <div className="pokemon__name">
        <Pokemon__name_P>{pokemon.name}</Pokemon__name_P>
      </div>
      <div className="pokemon__meta">
        <span>{pokemon.types}</span>
      </div>
      <div className="pokemon__image">
        <Pokemon_Image src={pokemon.image} alt={pokemon.name} />
      </div>
      <div></div>
    </Pokemon>
  );
}
