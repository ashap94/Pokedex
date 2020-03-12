import { connect } from "react-redux";
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon,
    items: Object.values(state.entities.items)
  };
  // items will be return in array form
  // pokemon is just a singular object
};

const mapDispatchToProps = dispatch => {
  return {};
};
