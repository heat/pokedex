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
    ListGroupItem
} from 'react-bootstrap';
import CapturedPokemons from '../../containers/captured-pokemons';

class PokedexComponent extends Component {
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
                        <CapturedPokemons />
                    </Col>
                    <Col xs={12} md={8}>
                        <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
                
export default PokedexComponent;