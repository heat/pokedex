import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Panel,
    Row,
    Col,
    Label,
    ListGroup
} from 'react-bootstrap';
import PokemonPesquisa from '../pokemon-pesquisa';
import PokemonMove from './move';

class PokemonDetalhe extends Component {
    render() {
        const { pokemon } = this.props;
        return (
            <Panel>
                <Panel.Body>
                    <Row>
                        <Col xs={12}>
                <PokemonPesquisa pokemon={this.props.pokemon} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                        {pokemon.types.map( t => <Label>{t.type.name}</Label>)}
                        </Col>
                    </Row>
                </Panel.Body>
                <ListGroup>
                    {pokemon.moves.map( m => (<PokemonMove move={m.move} />))}
                </ListGroup>
            </Panel>
        );
    }
}

PokemonDetalhe.propTypes = {
    pokemon: PropTypes.object
};

export default PokemonDetalhe;