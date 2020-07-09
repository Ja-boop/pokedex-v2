import { pedirTodosLosPokemonesAPI } from '../api/api.js'
import { guardarPeticionTodosLosPokemonesAPIEnStorage } from "../storage/storage.js";
import { guardarPeticionPokemonAPIEnStorage } from "../storage/storage.js";
import { pedirDatosDelPokemonAPI } from "../api/api.js";
import { cargarPokemonesLocalStorage } from "../storage/storage.js";
import { cargarPokemonLocalStorage } from "../storage/storage.js";

export async function servicioPedirTodosLosPokemones() {
        
    try{
        let todosLosPokemones = await cargarPokemonesLocalStorage();
        return todosLosPokemones;
    }catch (e) {
        const data = await pedirTodosLosPokemonesAPI();
        guardarPeticionTodosLosPokemonesAPIEnStorage(data);
        return data
    }
    
}

export async function servicioPedirPokemon(url) {

    try{
        const pokemon = await cargarPokemonLocalStorage(url);
        return pokemon;
    }catch (e) {
        const data = await pedirDatosDelPokemonAPI(url);
        guardarPeticionPokemonAPIEnStorage(url, data);
        return data
    }
}
