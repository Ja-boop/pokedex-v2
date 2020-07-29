import { servicioPedirTodosLosPokemones } from '../servicio/servicio.js'
import { listarPokemones } from '../ui/listador.js'
import { hidearResultados } from '../ui/listador.js'
import { mostrarResultadosFocus } from '../ui/listador.js'
import { mostrarPokemon } from '../ui/mostrarPokemon.js'
import { mapearListadoPokemones } from '../mapeadores/mapeadores.js'

export function manejarBusqueda(){
    manejarBarraDeBusqueda();
};

async function manejarBarraDeBusqueda(){
    const barraDeBusqueda = document.querySelector('#barra-busqueda');
    let todosLosPokemones = await servicioPedirTodosLosPokemones();
    let pokemonesResultados = mapearListadoPokemones(todosLosPokemones);
    barraDeBusqueda.addEventListener('keyup', (e) => {
        const textoBusqueda = e.target.value.toLowerCase().match(/^[A-Za-z\-]+/);
        listarPokemones(textoBusqueda, pokemonesResultados);
        const pokemon = document.querySelectorAll('.list-group-item');
        mostrarPokemon(pokemon);  
        hidearResultados(pokemon);
    }); 
  
    barraDeBusqueda.addEventListener('focus', (e) => {
        mostrarResultadosFocus();
    });
}

 
