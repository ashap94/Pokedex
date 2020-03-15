import { RECEIVE_POKEMON } from "../actions/pokemon_actions";

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_POKEMON:
      //   newState = Object.assign({}, state, action.payload.items);
      return action.payload.items;
    default:
      return state;
  }
};

export default itemsReducer;
