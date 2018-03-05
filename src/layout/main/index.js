import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';
import logo from '../../logo.svg';
import './main.css';
class App extends Component {
  render() {
    return (
    <div className="pokedex">
        <div className="container">
        <header>
            <h1>POKEDEX V1.2</h1>
        </header>
        </div>
        <Navbar className="container" >
            <Nav>
                <NavItem eventKey={1} href="/">POKEDEX</NavItem>
                <NavItem eventKey={2} href="/capturar">CAPTURAR</NavItem>
            </Nav>
        </Navbar>
        {this.props.children}
    </div>
    );
  }
}

export default App;