import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import logo from '../../logo.svg';

class App extends Component {
  render() {
    return (
    <div className="App  container">
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr />

        </div>
        {this.props.children}
    </div>
    );
  }
}

export default App;