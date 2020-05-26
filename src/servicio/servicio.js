import { pedirTodosLosPokemonesAPI } from '../api/api.js'

export async function pedirTodosLosPokemones() {
    try{
        const r = await pedirTodosLosPokemonesAPI()
        return r.results
    }
    
    catch(error){
        console.log(error + "Hubo un problema en la peticion")
    }
} 
