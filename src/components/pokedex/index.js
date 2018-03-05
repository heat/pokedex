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

class componentName extends Component {
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
                        <ListGroup>
                            <ListGroupItem>
                                <Link  to="/pokedex/pokemon"> Bubassauro</Link>
                            </ListGroupItem>
                            <ListGroupItem>Item 2</ListGroupItem>
                                <ListGroupItem>...</ListGroupItem>
                        </ListGroup>
                    </Col>
                        <Col xs={12} md={8}>
                            <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                        </Col>
                </Row>
            </Grid>
                );
            }
        }
        
componentName.propTypes = {

                };
                
export default componentName;