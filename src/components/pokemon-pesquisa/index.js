import React, { Component } from 'react';
import MissingNoRef from './missing-no';
import PokemonRef from './pokemon-ref';
import PropTypes from 'prop-types';
import {
    Button
} from 'react-bootstrap';
import {
    Redirect
} from 'react-router';

class PokemonPesquisa extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            redirecionar: false,
        };
    }

    capturar = () => {
        this.props.aoCapturarPokemon(this.props.capturar);
        this.setState({
            redirecionar: true,
        })
    }

    render() {

        const { pokemon } = this.props;

        if(!pokemon) {
            return (
                <MissingNoRef />
            );
        }
        if(this.state.redirecionar) {
            return (
                <Redirect to="/pokedex" />
            )    
        }
        return (
            <div>
            <PokemonRef nome={pokemon.name} altura={pokemon.height} peso={pokemon.weight} thumb={pokemon.sprites.front_default} /> 

            <Button bsStyle="success" onClick={this.capturar} > CAPTURAR </Button>
            </div>
        );
    }
}

PokemonPesquisa.propTypes = {
    pokemon: PropTypes.string
};

export default PokemonPesquisa;