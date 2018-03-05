import React from 'react'
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  Button,
  Glyphicon,
  Well
} from 'react-bootstrap';
import { Provider } from 'react-redux';
import MainLayout from './layout/main';
import CapturarRoute from './layout/capturar';
import Pokedex from './components/pokedex';

const HowToUse = () => {

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h3>Como usar?</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} >
          <p>Selecione o menu capturar e digite o nome ou numero do seu pokemon</p>
          <p>Clique no botao da lupa <Button><Glyphicon glyph="search" /></Button> e aguarde a pesquisa. O pokemon <strong>Missing NO é um erro</strong>, nunca o capture pois pode corromper seu save. </p>
          <p>Quando você encontrar o pokemon desejado clique em <Button bsStyle="success">CAPTURAR</Button> para enviar as informações do seu pokemon para pokedex.</p>

        </Col>
        <Col xs={12} md={4} >
          <p>Quando sua pokedex tiver registros dos seus pokemons eles irão aparecer na lista mostrando informações do tipo do pokemon. Clique no nome do pokemon para exibir detalhes dele.</p>
          <p>Quando quiser liberar um pokemon clique no <Button bsStyle="danger"><Glyphicon glyph="trash" /></Button> ao lado do nome do seu pokemon.</p>
          <p>Você pode consultar a lista de movimentos de seu pokemon quando clicar nela.</p>
        </Col>
        <Col xs={12} md={4} >
          <Well>
          <p>Um segredo: para saber quais os pokemon do mesmo tipo do seu clique no tipo dele quando aparecer os detalhes.</p>
          </Well>
        </Col>
      </Row>
    </Grid>
  )
}

const PokedexApp = () => (
  <Router>
    <MainLayout>
      <Route path="/" exact component={HowToUse}/>
      <Route path="/pokedex" component={Pokedex}/>
      <Route path="/capturar" component={CapturarRoute}/>
    </MainLayout>
  </Router>
)
export default PokedexApp