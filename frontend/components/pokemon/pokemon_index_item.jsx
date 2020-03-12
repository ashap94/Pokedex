import React from "react";
import { Link } from "react-router-dom";

const PokemonIndexItem = props => {
  return (
    <li>
      <Link to="/pokemon/:pokemonId">
        <h3>{props.pokemon.name}</h3>
        <img
          src={props.pokemon.image_url}
          alt={props.pokemon.name + " image"}
        />
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
