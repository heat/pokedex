import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import {
    Grid,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Panel,
} from 'react-bootstrap';
import CapturedPokemons from '../../containers/captured-pokemons';
import PokemonDetalhe from '../pokemon-detalhe';
import PokemonRelacionados from '../pokemon-relacionado';

class PokedexComponent extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            pokemon: null,
            tipo: null,
        }
    }

    detalhePokemon = (pokemon) => {

        this.setState({
            pokemon,
        });
    }

    pokemonRelacionados = tipo => {
        this.setState({
            tipo
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h3 className="text-muted">POKEDEX</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CapturedPokemons aoSelecionarPokemon={this.detalhePokemon} />
                    </Col>
                    <Col xs={6} md={4}>
                        {(this.state.pokemon)?<PokemonDetalhe pokemon={this.state.pokemon} aoEscolherTipo={this.pokemonRelacionados} />:null}
                    </Col>
                    <Col xs={6} md={8}>
                        <PokemonRelacionados tipo={this.state.tipo} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
                
export default PokedexComponent;