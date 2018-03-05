export const capturarPokemon = pokemon => {

    return {
        type: 'CAPTURAR',
        pokemon
    };
}

export const liberarPokemon = pokemon => {

    return {
        type: 'LIBERAR',
        id: pokemon.id,
    }
}