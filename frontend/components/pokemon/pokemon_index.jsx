import React, { useState, useEffect } from "react";
import PokemonIndexItem from "./pokemon_index_item";
import PokemonDetailContainer from "./pokemon_detail_container";
import PokemonFormContainer from "./pokemon_form_container";
import { Route, withRouter } from "react-router-dom";

const PokemonIndex = props => {
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    props.requestAllPokemon();
    // setLoaded(true);
    document
      .getElementById("pokeball-image")
      .addEventListener("click", function() {
        props.history.push("/");
      });
  }, []);

  // if (loaded === false) {
  //   return null;
  // }

  let pokemonItem = props.pokemon.map(poke => (
    <PokemonIndexItem key={poke.id} pokemon={poke} />
  ));

  return (
    <div className="pokedex">
      <Route exact path="/" component={PokemonFormContainer} />
      <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      <ul>{pokemonItem}</ul>
    </div>
  );
};

export default withRouter(PokemonIndex);
