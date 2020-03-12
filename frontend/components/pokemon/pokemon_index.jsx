import React, { useState, useEffect } from "react";
import PokemonIndexItem from "./pokemon_index_item";

const PokemonIndex = props => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    props.requestAllPokemon();
    setLoaded(true);
  }, []);

  if (loaded === false) {
    return null;
  }

  let pokemonItem = props.pokemon.map(poke => (
    <PokemonIndexItem key={poke.id} pokemon={poke} />
  ));

  return (
    <div>
      <ul>{pokemonItem}</ul>
    </div>
  );
};

export default PokemonIndex;
