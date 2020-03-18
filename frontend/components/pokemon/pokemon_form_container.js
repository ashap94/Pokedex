import { connect } from "react-redux";
import { createPokemon } from "../../actions/pokemon_actions";
import PokemonForm from "./pokemon_form";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    createPokemon: pokemonForm => dispatch(createPokemon(pokemonForm))
  };
};

export default connect(null, mapDispatchToProps)(PokemonForm);
