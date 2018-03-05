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
import PokemonPesquisa from '../pokemon-pesquisa';

class PokedexComponent extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            pokemon: null,
        }
    }

    detalhePokemon = (pokemon) => {

        this.setState({
            pokemon,
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
                    <Col xs={12} md={4}>
                        <CapturedPokemons aoSelecionarPokemon={this.detalhePokemon} />
                    </Col>
                    <Col xs={12} md={8}>
                        {(this.state.pokemon)?<Panel >
                            <Panel.Body>
                            <PokemonPesquisa pokemon={this.state.pokemon} />
                            </Panel.Body>
                            </Panel>:null}
                    </Col>
                </Row>
            </Grid>
        );
    }
}
                
export default PokedexComponent;