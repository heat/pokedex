import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Media,
} from 'react-bootstrap';


class PokemonRef extends Component {
    render() {

        const altura = this.props.altura || 0;
        const peso = this.props.peso || 0;
        return (
            <Media>
                <Media.Left>
                    <img width={64} height={64} src={this.props.thumb} alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>{this.props.nome}</Media.Heading>
                    <p>{this.props.desc}</p>
                    <p>ALTURA: {altura.toFixed(2)} PESO: {peso.toFixed(2)} </p>
                </Media.Body>
            </Media>
        );
    }
}

PokemonRef.propTypes = {
    thumb: PropTypes.string,
    nome: PropTypes.string,
    desc: PropTypes.string,
    altura: PropTypes.number,
    peso: PropTypes.number,
};

export default PokemonRef;