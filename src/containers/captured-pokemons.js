import React, { Component } from 'react';
import { connect } from 'react-redux';
import  PokemonList from '../components/pokemon-list';
import { liberarPokemon } from '../actions';
function mapStateToProps(state) {
    return {
        pokemons: state.pokedex
    };
}
const mapDispatchToProps = dispatch => {
    return {
      aoLiberarPokemon: pokemon => {
        dispatch(liberarPokemon(pokemon))
      }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonList);