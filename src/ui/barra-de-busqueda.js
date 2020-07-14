import { servicioPedirTodosLosPokemones } from '../servicio/servicio.js'
import { listadoResultadosDePokemon } from '../ui/listador.js'
import { borrarDatosFotosColumnas } from '../ui/listador.js'
import { hidearResultados } from '../ui/listador.js'
import { mostrarResultadosFocus } from '../ui/listador.js'
import { mostrarPokemon } from '../ui/mostrarPokemon.js'
import { mapearListadoPokemones } from '../mapeadores/mapeadores.js'

export function manejarBusqueda(){
    manejarBarraDeBusqueda();
};

async function manejarBarraDeBusqueda(){
    const barraDeBusqueda = document.querySelector('#barra-busqueda');
    let pokemonesBarraBusqueda = await servicioPedirTodosLosPokemones();
    let pokemonesResultados = mapearListadoPokemones(pokemonesBarraBusqueda);
    
    barraDeBusqueda.addEventListener('keyup', (e) => {
        const textoBusqueda = e.target.value.toLowerCase().match(/^[A-Za-z\-]+/);
        const pokemonesFiltrados = pokemonesResultados.nombresYUrlPokemones.filter((pokemones) => {
            return (
                pokemones.name.toLowerCase().includes(textoBusqueda)
            );  
        });

        if(textoBusqueda !== null) { // Si no pongo esto, cada vez que borre el input del usuario, va a salir un pokemon llamado "null"
            listadoResultadosDePokemon(pokemonesFiltrados);
            const pokemon = document.querySelectorAll('.list-group-item');
            mostrarPokemon(pokemon);  
            hidearResultados(pokemon);
        } else {
            borrarDatosFotosColumnas(); 
            
        };
    }); 
  
    barraDeBusqueda.addEventListener('focus', (e) => {
        mostrarResultadosFocus();
    });
}

 
