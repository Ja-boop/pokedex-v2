import { pedirTodosLosPokemonesAPI } from '../api/api.js'
import { guardarPeticionAPIEnStorage } from "../storage/storage.js";
import { pedirDatosDelPokemonAPI } from "../api/api.js";
import { guardarPeticionPokemonAPIEnStorage } from "../storage/storage.js";

export async function servicioPedirTodosLosPokemones() {

    if(localStorage.getItem('todosLosPokemones')) {
        let todosLosPokemones = JSON.parse( localStorage.getItem('todosLosPokemones') );
        return todosLosPokemones
    } else{
        let data = await pedirTodosLosPokemonesAPI();
        guardarPeticionAPIEnStorage();
        return data
    }
}

export async function servicioPedirPokemon(url) {

    try{
        let data = await pedirDatosDelPokemonAPI(url);
        return data
            
    } catch (e) {
        console.log(e);
    }

    

}
