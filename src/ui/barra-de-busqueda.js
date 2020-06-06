import { pedirTodosLosPokemones } from '../servicio/servicio.js'
import { listadoResultadosDePokemon } from '../ui/listador.js'
import { borrarDatosFotosColumnas } from '../ui/listador.js'
import { hidearResultados } from '../ui/listador.js'
import { mostrarResultadosFocus } from '../ui/listador.js'
import { mostrarInfo } from '../ui/listador.js'

export function manejarBusqueda(){
    manejarBarraDeBusqueda();
};

async function manejarBarraDeBusqueda(){
    const barraDeBusqueda = document.querySelector('#barra-busqueda');
    let pokemonesBarraBusqueda = await pedirTodosLosPokemones();
    
    barraDeBusqueda.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase().match(/^[A-Za-z\-]+/);
        const pokemonesFiltrados = pokemonesBarraBusqueda.filter((pokemones) => {
            return (
                pokemones.name.toLowerCase().includes(searchString)
            );  
        });

        if(searchString !== null) {
            listadoResultadosDePokemon(pokemonesFiltrados);
            hidearResultados();
            mostrarInfo();  
        } else {
            borrarDatosFotosColumnas(); 
        };
    }); 

   
  
  
    barraDeBusqueda.addEventListener('focus', (e) => {
        mostrarResultadosFocus();
    });
}

 
