export const fetchAllPokemon = () =>
  $.ajax({
    method: `GET`,
    url: `/api/pokemon`
  });

export const fetchPokemon = id =>
  $.ajax({
    method: `GET`,
    url: `/api/pokemon/${id}`
  });

export const createPokemon = pokemon => {
  pokemon.moves = Object.values(pokemon.moves); // array data type

  return $.ajax({
    method: `POST`,
    url: `/api/pokemon`,
    data: { pokemon }
  });
};
