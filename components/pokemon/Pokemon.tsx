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
export function Pokemons({ pokemon }) {
  return (
    <Pokemon>
      <div>
        <BoxName>
          <PokemonName>{pokemon.name}</PokemonName>
        </BoxName>

        {pokemon.types[1] ? (
          <PokemonType>
            <PokemonTypeSpan>{`${pokemon.types[0]} `}</PokemonTypeSpan>
            <PokemonTypeSpan>{`${pokemon.types[1]} `}</PokemonTypeSpan>
          </PokemonType>
        ) : (
          <PokemonType>
            <PokemonTypeSpan>{`${pokemon.types[0]} `}</PokemonTypeSpan>
          </PokemonType>
        )}

        <BoxImage>
          <img src={pokemon.image} alt={pokemon.name} />
        </BoxImage>
      </div>
    </Pokemon>
  );
}
