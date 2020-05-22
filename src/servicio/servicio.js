import { cargarTodosLosPokemones } from '../api/api.js'

export let todosLosPokemones = {};

export function cargarTodosLosPokemonesAPI(todosLosPokemones){
    cargarTodosLosPokemones(todosLosPokemones);
}


