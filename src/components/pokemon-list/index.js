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

const PokemonListItem = ({pokemon, aoExcluir}) => {
    const pokemonLink = `/pokedex/${pokemon.id}`;
    console.log(arguments);
    return (
        <ListGroupItem className="pokemon-item" >
            <Link to={pokemonLink} >#{pokemon.id} {pokemon.name}</Link>
            <Button bsStyle="danger" className="pull-right" bsSize="small"
                onClick={() => aoExcluir(pokemon) }  >
            <Glyphicon glyph="trash" />
            </Button>
        </ListGroupItem>
    );
}

class PokemonList extends PureComponent {
    render() {
        return (
            <ListGroup>
                { this.props.pokemons.map( p => <PokemonListItem pokemon={p} aoExcluir={this.props.aoLiberarPokemon} />)}
            </ListGroup>
        );
    }
}

PokemonList.propTypes = {
    pokemons: PropTypes.array,
};

export default PokemonList;