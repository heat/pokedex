import { combineReducers } from 'redux';
import pokedex from './pokedex';

const app = combineReducers({
    pokedex
});

export default app