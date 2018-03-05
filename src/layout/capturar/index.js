import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    FormGroup,
    InputGroup,
    FormControl,
    Button,
    Glyphicon
} from 'react-bootstrap';
import PokemonPesquisa from '../../containers/searched-pokemon';
import './capturar.css'

class CapturarRoute extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            pesquisa: '',
            pokemon: null,
            pesquisando: false,
        };
    }

    alteracaoPesquisa = (e) => {
        this.setState({ pesquisa: e.target.value });
    }

    pesquisar = async () => {

        const termo = this.state.pesquisa;
        if(termo === null || termo === '') {

            return;
        } 
        this.setState({ pokemon: null, pesquisando: true })

        fetch(`https://pokeapi.co/api/v2/pokemon/${termo}`)
        .then( resp => {
            if(resp.status !== 200) {
                return null
            }
            
            return resp.json();
        })
        .then( json => {

            this.setState({ pokemon: json, pesquisando: false, });
        })
        .catch( err => { 
            alert(err);
            this.setState({ pesquisando: false, pokemon: null, });
        });
    }

    render() {

        const capturarDisabled = this.state.pokemon === null || this.state.pokemon === undefined;
        console.log(`disabled: `)
        console.log(capturarDisabled)
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                    <header>
                        <h3>Capturar</h3>
                    </header>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" placeholder="numero ou nome do pokemon" 
                                 value={this.state.pesquisa}
                                 onChange={this.alteracaoPesquisa} />
                                <InputGroup.Button>
                                <Button bsStyle="primary"
                                    disabled={this.state.pesquisando}
                                    onClick={this.pesquisar} >
                                { (this.state.pesquisando ? <Glyphicon glyph="refresh" className="glyphicon-refresh-animate" /> : <Glyphicon glyph="search" /> ) }
                                </Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                    <div>
                        <PokemonPesquisa pokemon={this.state.pokemon} capturar >

                        </PokemonPesquisa>
                    </div>
                    </Col>
                            
                    <Col xs={12}>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default CapturarRoute;