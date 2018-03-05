import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import {
    Grid,
    Row,
    Col,
    Label,
    ListGroup,
    ListGroupItem,
    Button,
    Glyphicon
} from 'react-bootstrap';
import './style.css';

const PokemonListItem = ({pokemon, aoLiberarPokemon, aoSelecionarPokemon }) => {
    const pokemonLink = `/pokedex/${pokemon.id}`;
    return (
        <ListGroupItem className="pokemon-item" >
            <Row>
                <Col xs={4}>
            <a href="#" onClick={() => aoSelecionarPokemon(pokemon)} >#{pokemon.id} {pokemon.name}</a>
                </Col>
                <Col xs={4}>
                    {pokemon.types.map( t => <Label bsSize="large" >{t.type.name}</Label>)}
                </Col>
                <Col xs={4}>
            <Button bsStyle="danger" className="pull-right" bsSize="small"
                onClick={() => aoLiberarPokemon(pokemon) }  >
            <Glyphicon glyph="trash" />
            </Button>
                </Col>
            </Row>
        </ListGroupItem>
    );
}

class PokemonList extends PureComponent {
    render() {

        if(this.props.pokemons.length < 1) {
            return (
            <ListGroup>
                <ListGroupItem bsStyle="warning"> SEM POKEMON NA LISTA </ListGroupItem>
            </ListGroup>
            );
        }
        return (
            <ListGroup>
                { this.props.pokemons.map( p => <PokemonListItem pokemon={p} {...this.props} />)}
            </ListGroup>
        );
    }
}

PokemonList.propTypes = {
    pokemons: PropTypes.array,
};

export default PokemonList;