import React from "react";
import ReactDOM from "react-dom";
import { requestAllPokemon } from "./actions/pokemon_actions";
import { fetchAllPokemon } from "./util/api_util";
import configureStore from "./store/store";
import { selectAllPokemon } from "./reducers/selectors";
import Root from "./components/root";
import { HashRouter, Route } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;

  window.selectAllPokemon = selectAllPokemon;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
