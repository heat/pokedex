import React, { Component } from 'react';
import { connect } from 'react-redux';
import  PokemonPesquisa from '../components/pokemon-pesquisa';
import { capturarPokemon } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
      aoCapturarPokemon: pokemon => {
        dispatch(capturarPokemon(pokemon))
      }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PokemonPesquisa);