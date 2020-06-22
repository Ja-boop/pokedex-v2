import { pedirTodosLosPokemonesAPI } from "../api/api.js";

export async function guardarPeticionAPIEnStorage() {

    let todosLosPokemones = await pedirTodosLosPokemonesAPI();

    localStorage.setItem( 'todosLosPokemones', JSON.stringify(todosLosPokemones) )
}
