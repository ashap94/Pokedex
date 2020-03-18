export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";
import * as APIUtil from "../util/api_util";

const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

const receivePokemon = payload => ({
  type: RECEIVE_POKEMON,
  payload
});

const receivePokemonErrors = errors => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});

export const requestAllPokemon = () => dispatch =>
  APIUtil.fetchAllPokemon().then(pokemon =>
    dispatch(receiveAllPokemon(pokemon))
  );

export const requestSinglePokemon = pokemonId => dispatch =>
  APIUtil.fetchPokemon(pokemonId).then(payload =>
    dispatch(receivePokemon(payload))
  );

export const createPokemon = pokemonForm => dispatch =>
  APIUtil.createPokemon(pokemonForm)
    .then(payload => {
      dispatch(receivePokemon(payload));
      return payload.pokemon;
    })
    .fail(error => {
      console.log("HERE ARE WHAT ERRORS LOOK LIKE:   ", error);
      dispatch(receivePokemonErrors(error.responseJSON));
    });
