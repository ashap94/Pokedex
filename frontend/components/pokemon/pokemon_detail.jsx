import React, { useState, useEffect } from "react";

const PokemonDetail = props => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    props.requestSinglePokemon(props.match.params.pokemonId);
    setLoaded(true);
  }, []);

  useEffect(() => {
    props.requestSinglePokemon(props.match.params.pokemonId);
  }, [props.match.params.pokemonId]);

  if (loaded === false || !props.pokemon) {
    return null;
  }

  //   let items = props.items.map( item => {
  //       <li key=></li>
  //   })
  console.log("WHAT DOES POKEMON LOOK LIKE:   ", props.pokemon);

  return (
    <div>
      <img src={props.pokemon.image_url} alt="" />
      <h3>{props.pokemon.name}</h3>
      <p>Type: {props.pokemon.poke_type}</p>
      <p>Attack: {props.pokemon.attack}</p>
      <p>Defense: {props.pokemon.defense}</p>
      <p>Moves: {props.pokemon.moves.join(", ")}</p>
    </div>
  );
};

export default PokemonDetail;
