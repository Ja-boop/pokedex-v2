import { pedirTodosLosPokemonesAPI } from "../api/api.js";
import { pedirDatosDelPokemonAPI } from "../api/api.js";

export async function guardarPeticionAPIEnStorage() {

    let todosLosPokemones = await pedirTodosLosPokemonesAPI();

    localStorage.setItem( 'todosLosPokemones', JSON.stringify(todosLosPokemones) )
}

export async function guardarPeticionPokemonAPIEnStorage(url) {

    let pokemon = await pedirDatosDelPokemonAPI(url);

    localStorage.setItem( `${url}`, JSON.stringify(pokemon) )
}
