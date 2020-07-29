const nombrePokemon = document.querySelector('#lista-resultado-pokemon');

export function listarPokemones(textoBusqueda, pokemonesResultados){
    if(textoBusqueda !== null) { // Si no pongo esto, cada vez que borre el input del usuario, va a salir un pokemon llamado "null"
        const pokemonesFiltrados = pokemonesResultados.nombresYUrlPokemones.filter((pokemones) => {
        return (
            pokemones.name.toLowerCase().includes(textoBusqueda)
        );  
    });
        listadoResultadosDePokemon(pokemonesFiltrados); 
    }else {
        borrarDatosFotosColumnas();    
    };
}



function listadoResultadosDePokemon(array) {
    nombrePokemon.textContent = '';
    nombrePokemon.style.display = ''
        
    array.map((pokemon) => {
        let ponerPokemon = `
        <button href=${pokemon.url} 
        class="list-group-item list-group-item-action">${pokemon.name}</button>   
        `
    
        nombrePokemon.innerHTML += ponerPokemon;
    })
}

export function borrarDatosFotosColumnas() {
    nombrePokemon.textContent = '';
    nombrePokemon.style.display = 'none'
}

export function mostrarResultadosFocus(){
    nombrePokemon.style.display = 'block'
}

export function hidearResultados(pokemones){

    for ( const pokemon of pokemones ) {
        pokemon.addEventListener('blur', (e) => {
            hidearResultadosOnBlur(pokemon);
        });
    }
    
}

function hidearResultadosOnBlur(){
    nombrePokemon.style.display = 'none'
}
