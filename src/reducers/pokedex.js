const pokedex = ( state = [{
    id: 12,
    name: `12312312`,
    sprites: {}
}], action) => {

    switch(action.type) {
        case 'CAPTURAR':
        
        const exists = state.filter( p => p.id === action.pokemon.id).length;
        if(exists) {
            return state;
        }
        return [
            ...state,
            action.pokemon
        ]
        case 'LIBERAR':
        return state.filter( p => p.id !== action.id );
        default: 
        return state;
    }
}

export default pokedex