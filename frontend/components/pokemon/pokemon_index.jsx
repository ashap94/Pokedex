import React, { useState, useEffect } from "react";

const PokemonIndex = props => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    props.requestAllPokemon();
    setLoaded(true);
  }, []);

  if (loaded === false) {
    return null;
  }

  let pokemon = props.pokemon.map(poke => (
    <li key={poke.id}>
      <h3>{poke.name}</h3>
      <img src={poke.image_url} />
    </li>
  ));

  return (
    <div>
      <ul>{pokemon}</ul>
    </div>
  );
};

export default PokemonIndex;
