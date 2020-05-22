import { cargarTodosLosPokemones as cargarTodosLosPokemonesAPI } from '../api/api.js'

export function cargarTodosLosPokemones(todosLosPokemones){
    cargarTodosLosPokemonesAPI(todosLosPokemones);
    console.log(todosLosPokemones);
}


