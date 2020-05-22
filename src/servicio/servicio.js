import { cargarTodosLosPokemones as cargarTodosLosPokemonesAPI } from '../api/api.js'

export let todosLosPokemones = {};

export function cargarTodosLosPokemones(todosLosPokemones){
    cargarTodosLosPokemonesAPI(todosLosPokemones);
}


