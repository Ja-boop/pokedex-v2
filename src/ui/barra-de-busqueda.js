import { pedirTodosLosPokemones } from '../servicio/servicio.js'
const nombrePokemon = document.querySelector('#lista-resultado-pokemon');
const listaPokemon = document.querySelector('#lista-resultado-pokemon')

export async function manejarBusqueda(){
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
        } else {
            borrarDatosFotosColumnas(); 
        };

        
        
    }); 

   
    barraDeBusqueda.addEventListener('blur', (e) => {
        hidearResultadosOnBlur();
    });
  
    barraDeBusqueda.addEventListener('focus', (e) => {
        mostrarResultadosFocus();
    });
}


function listadoResultadosDePokemon(array) {
    nombrePokemon.textContent = '';
    nombrePokemon.style.display = ''
    

    array.map((pokemon) => {
        let ponerPokemon = `
        <button href=${pokemon.url} 
        class="list-group-item list-group-item-action">${pokemon.name}</button>
        
        `

        listaPokemon.innerHTML += ponerPokemon;
    })

}



function borrarDatosFotosColumnas() {
    nombrePokemon.textContent = '';
    nombrePokemon.style.display = 'none'
}

function hidearResultadosOnBlur(){
    nombrePokemon.style.display = 'none'
}

function mostrarResultadosFocus(){
    nombrePokemon.style.display = 'block'
} 
