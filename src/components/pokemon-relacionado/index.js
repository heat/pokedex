import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

class PokemonRelacionado extends Component {

    constructor() {
        super(...arguments);

        this.state = {
            pokemons: [],
            error: null
        }
    }

    async componentWillReceiveProps(nextProps) {

        this.pesquisarPorTipo(nextProps.tipo);
    }

    componentDidMount() {

        this.pesquisarPorTipo(this.props.tipo);
    }

    pesquisarPorTipo = async (tipo) => {
        const URL = `https://pokeapi.co/api/v2/type/${tipo}`;

        fetch(URL)
        .then( resp => resp.json())
        .then( t => {
            this.setState({
                pokemons: t.pokemon,
                error: null,
            });
        })
        .catch( err => {
            this.setState({
                pokemons: [],
                error: err
            })
        });
    }

    render() {

        if(!this.props.tipo) {
            return <div> clique no tipo para ver o tipo relacionado </div>;
        }
        
        const pokemons = this.state.pokemons || [];
        return (
            <div>
                <header> <h4>{this.props.tipo}</h4></header>
            <ListGroup>
                {pokemons.map( p => <ListGroupItem>{p.pokemon.name}</ListGroupItem> )}
            </ListGroup>
            </div>
        );
    }
}

PokemonRelacionado.propTypes = {
    tipo: PropTypes.string,
};

export default PokemonRelacionado;