import React, { useState, useEffect } from "react";
import ItemDetailContainer from "../items/item_detail_container";
import { Route, Link } from "react-router-dom";

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

  let items = props.items.map(item => (
    <li key={item.id}>
      <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
        <img src={item.image_url} alt={item.name} />
      </Link>
    </li>
  ));

  return (
    <section className="pokemon-detail">
      <figure>
        <img src={props.pokemon.image_url} alt={props.pokemon.name} />
      </figure>
      <ul className="pokemon-detail-properties">
        <li>
          <h2>{props.pokemon.name}</h2>
        </li>
        <li>Type: {props.pokemon.poke_type}</li>
        <li>Attack: {props.pokemon.attack}</li>
        <li>Defense: {props.pokemon.defense}</li>
        <li>Moves: {props.pokemon.moves.join(", ")}</li>
      </ul>
      <section className="toys">
        <h3>Items</h3>
        <ul className="toy-list">{items}</ul>
      </section>
      <Route
        path="/pokemon/:pokemonId/item/:itemId"
        component={ItemDetailContainer}
      />
    </section>
  );
};

export default PokemonDetail;
