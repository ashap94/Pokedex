import { connect } from "react-redux";
import PokemonDetail from "./pokemon_detail";
import { requestSinglePokemon } from "../../actions/pokemon_actions";

const mapStateToProps = (state, ownProps) => {
  let targetPokemon = state.entities.pokemon[ownProps.match.params.pokemonId];

  return {
    pokemon: targetPokemon,
    items: Object.values(state.entities.items)
  };
  // items will be return in array form
  // pokemon is just a singular object
};

const mapDispatchToProps = dispatch => {
  return {
    requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
