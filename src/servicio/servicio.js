import { pedirTodosLosPokemonesAPI } from '../api/api.js'

export async function pedirTodosLosPokemones() {
    const r = await pedirTodosLosPokemonesAPI()
    return r
    
} 
