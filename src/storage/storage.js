import { pedirTodosLosPokemonesAPI } from "../api/api.js";
import { pedirDatosDelPokemonAPI } from "../api/api.js";

export async function guardarPeticionAPIEnStorage(todosLosPokemones) {
    localStorage.setItem( 'todosLosPokemones', JSON.stringify(todosLosPokemones) )
}

export async function guardarPeticionPokemonAPIEnStorage(url) {

    let pokemon = await pedirDatosDelPokemonAPI(url);

    localStorage.setItem( `${url}`, JSON.stringify(pokemon) )
}

export async function cargarPokemonesLocalStorage() {
    let todosLosPokemones = JSON.parse( localStorage.getItem('todosLosPokemones') );
    if(todosLosPokemones === null) {
        throw new Error("No estan todos los pokemones guardados en local storage")
    }

    return todosLosPokemones
}
