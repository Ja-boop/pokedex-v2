import { pedirTodosLosPokemonesAPI } from '../api/api.js'
import { guardarPeticionAPIEnStorage } from "../storage/storage.js";
import { pedirDatosDelPokemonAPI } from "../api/api.js";
import { cargarPokemonesLocalStorage } from "../storage/storage.js";

export async function servicioPedirTodosLosPokemones() {
        
    try{
        let todosLosPokemones = await cargarPokemonesLocalStorage();
        return todosLosPokemones;
    }catch (e) {
        console.log(e);
        let data = await pedirTodosLosPokemonesAPI();
        guardarPeticionAPIEnStorage(data);
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
