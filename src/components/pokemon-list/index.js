import React, { PureComponent } from 'react';
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
    Button,
    Glyphicon
} from 'react-bootstrap';
import './style.css';

const PokemonListItem = ({pokemon, aoLiberarPokemon, aoSelecionarPokemon }) => {
    const pokemonLink = `/pokedex/${pokemon.id}`;
    return (
        <ListGroupItem className="pokemon-item" >
            <a href="#" onClick={() => aoSelecionarPokemon(pokemon)} >#{pokemon.id} {pokemon.name}</a>
            <Button bsStyle="danger" className="pull-right" bsSize="small"
                onClick={() => aoLiberarPokemon(pokemon) }  >
            <Glyphicon glyph="trash" />
            </Button>
        </ListGroupItem>
    );
}

class PokemonList extends PureComponent {
    render() {
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