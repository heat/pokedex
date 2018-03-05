import React, { Component } from 'react';
import MissingNoRef from './missing-no';
import PokemonRef from './pokemon-ref';
import PropTypes from 'prop-types';

class PokemonPesquisa extends Component {
    render() {

        const { pokemon } = this.props;
        if(!pokemon) {
            return (
                <MissingNoRef />
            );
        }
        return (
            <PokemonRef nome={pokemon.name} altura={pokemon.height} peso={pokemon.weight} thumb={pokemon.sprites.front_default} /> 
        );
    }
}

PokemonPesquisa.propTypes = {
    pokemon: PropTypes.string
};

export default PokemonPesquisa;