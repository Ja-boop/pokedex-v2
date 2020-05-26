import { pedirTodosLosPokemones } from '../servicio/servicio.js'

export async function manejarBarraDeBusqueda(){
    const barraDeBusqueda = document.querySelector('#barra-busqueda');
    let pokemonesBarraBusqueda = await pedirTodosLosPokemones();
    console.log(pokemonesBarraBusqueda)
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
        }
    
    }) 

    
}

function listadoResultadosDePokemon(array) {
    const listaPokemon = document.querySelector('#lista-resultado-pokemon')

    array.map((pokemon) => {
        let ponerPokemon = `
        <a href=${pokemon.url} 
        class="list-group-item list-group-item-action">${pokemon.name}</a>
        
        `

        listaPokemon.innerHTML += ponerPokemon;
    })

}

function borrarDatosFotosColumnas() {
    let nombrePokemon = document.querySelector('#lista-resultado-pokemon');
    nombrePokemon.textContent = '';
}
