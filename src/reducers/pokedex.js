const pokedex = ( state = [], action) => {

    switch(action.type) {
        case 'CAPTURAR':
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