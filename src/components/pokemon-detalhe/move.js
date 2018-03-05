import React, { Component } from 'react';
import {
    ListGroupItem,
    Glyphicon,
    Collapse,
    Button
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.css';


const MoveDetalhe = ({ detalhe }) => {
    if(!detalhe) {
        return null;
    }
    return (
        <div>
            {detalhe.effect_entries.map(effect => (

                <dl>
                    <dt>{effect.short_effect}</dt>
                    <dd>{effect.effect}</dd>
                </dl>
            ))}
        </div>
    );
}
class PokemonMove extends Component {

    state = {
        detalhe: null,
        carregando: false,
    }

    abrirDetalhe = async () => {
        this.setState({
            carregando: true,
        });


        fetch(this.props.move.url)
            .then(r => r.json())
            .then(detalhe => {

                this.setState({
                    detalhe,
                    carregando: false,
                })
            })
            .catch(err => {
                this.setState({
                    detalhe: null,
                    carregando: false,
                })
            });
    }

    render() {
        const move = this.props.move;
        const detalhe = this.state.detalhe;
        const opened = detalhe !== null || detalhe !== undefined;
        return (
            <ListGroupItem>
                <Button bsStyle="link" onClick={this.abrirDetalhe}> {move.name} </Button>
                {this.state.carregando ? <Glyphicon glyph="refresh" className="glyphicon-refresh-animate" /> : null}
                <Collapse in={opened}>
                    <MoveDetalhe detalhe={detalhe} />
                </Collapse>
            </ListGroupItem>
        );
    }
}

PokemonMove.propTypes = {
    move: PropTypes.object,
};

export default PokemonMove;