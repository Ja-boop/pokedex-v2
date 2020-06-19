import { pedirTodosLosPokemonesAPI } from '../api/api.js'
import { guardarPeticionAPIEnStorage } from "../storage/storage.js";


export async function pedirTodosLosPokemones() {
    try{
        const r = await pedirTodosLosPokemonesAPI();
        return mapearListadoPokemones(r)
    }
    
    catch(error){
        console.log(error + "Hubo un problema en la peticion")
    }
} 

export async function servicioPedirTodosLosPokemones() {

    try{
        let todosLosPokemones = JSON.parse( localStorage.getItem('todosLosPokemones') );
        return todosLosPokemones
    } catch (e) {
        guardarPeticionAPIEnStorage();
        let data = await pedirTodosLosPokemonesAPI();
        return data
    }
}
