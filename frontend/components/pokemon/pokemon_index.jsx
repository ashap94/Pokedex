import React, { useState, useEffect } from "react";
import PokemonIndexItem from "./pokemon_index_item";
import PokemonDetailContainer from "./pokemon_detail_container";
import { Route } from "react-router-dom";

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
      <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      <ul>{pokemonItem}</ul>
    </div>
  );
};

export default PokemonIndex;
