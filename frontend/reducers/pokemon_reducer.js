import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_POKEMON
} from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      //   if (Object.values(state).length === 1) {
      //       let singlePokemon = Object.values(state)[0];
      //       newState = Object.assign( {},  )
      //   }
      newState = Object.assign({}, action.pokemon, state);
      return newState;

    case RECEIVE_POKEMON:
      newState = Object.assign({}, state, {
        [action.payload.pokemon.id]: action.payload.pokemon
      });
      return newState;

    default:
      return state;
  }
};

export default pokemonReducer;
