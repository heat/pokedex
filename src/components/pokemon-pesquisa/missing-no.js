import React, { Component } from 'react';
import PokemonRef from './pokemon-ref';

class MissingNo extends Component {
    render() {
        return (
            <PokemonRef thumb="https://pm1.narvii.com/6319/26350e118c7401699a9beae2111a0d6c2839acc5_128.jpg" nome="Missing NO" desc="Pokemon inexistente" />
        );
    }
}

export default MissingNo;