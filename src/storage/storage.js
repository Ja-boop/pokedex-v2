export async function cargarPokemonesLocalStorage() {
    let todosLosPokemones = JSON.parse( localStorage.getItem('todosLosPokemones') );
    if(todosLosPokemones === null) {
        throw new Error("No estan todos los pokemones guardados en local storage")
    }

    return todosLosPokemones
}

export async function cargarPokemonLocalStorage(url) {
    let pokemon = JSON.parse( localStorage.getItem(`${url}`) );
    if(pokemon === null) {
        throw new Error("No se encuentra el pokemon")
    }

    return pokemon;
}

export async function guardarPeticionTodosLosPokemonesAPIEnStorage(todosLosPokemones) {
    localStorage.setItem( 'todosLosPokemones', JSON.stringify(todosLosPokemones) )
}

export async function guardarPeticionPokemonAPIEnStorage(url, pokemon) {
    localStorage.setItem( `${url}`, JSON.stringify(pokemon) )
}
