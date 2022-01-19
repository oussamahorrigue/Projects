import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PokemonsContainer } from "../components/pokemon/PokemonsContainer";
import PokemonLayout from "../components/NavBar/PokemonNavBar";
const Pokemon = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-pokemon2.vercel.app",
  });
  return (
    <ApolloProvider client={client}>
      <PokemonLayout />
      <PokemonsContainer />
    </ApolloProvider>
  );
};
export default Pokemon;
