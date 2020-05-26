import { pedirTodosLosPokemones } from '../servicio/servicio.js'

export function manejarBarraDeBusqueda(){
    const barraDeBusqueda = document.querySelector('#barra-busqueda');
    let pokemonesBarraBusqueda = [];
    pedirTodosLosPokemones().then(r => barraDeBusqueda.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase().match(/^[A-Za-z\-]+/);
        const pokemonesFiltrados = r.filter((pokemones) => {
            return (
                pokemones.name.toLowerCase().includes(searchString)
            );  
        });

        if(searchString !== null) {
            listadoResultadosDePokemon(pokemonesFiltrados);
        } 
    
    }) );
    console.log(pokemonesBarraBusqueda);

    
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
