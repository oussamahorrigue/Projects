import React from "react";
import Link from "next/link";

const PokemonNavBar = ({ setPokemonSearched }) => {
  return (
    <div className="ui pointing menu">
      <Link href="/">
        <a className="item">SpaceX</a>
      </Link>
      <Link href="/videoBrowser">
        <a className="item">videoBrowser</a>
      </Link>
      <Link href="wikipedia">
        <a className="item">Wikipedia</a>
      </Link>
      <Link href="pokemon">
        <a className="item">Pokemon</a>
      </Link>
      <div className="ui action input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setPokemonSearched(e.target.value)}
        />
        <button className="ui button">Search</button>
      </div>
    </div>
  );
};
export default PokemonNavBar;
