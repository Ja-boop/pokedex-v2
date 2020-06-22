import { pedirDatosDelPokemon } from '../api/api.js'

const nombrePokemon = document.querySelector('#lista-resultado-pokemon');
export function listadoResultadosDePokemon(array) {
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

export function mostrarPokemon(pokemones){

    for (const pokemon of pokemones) {
        pokemon.addEventListener('click', async function(e) {
            let url = e.currentTarget.attributes.href.value
            let pokemon = await pedirDatos(url);

            console.log(pokemon)
        });
    }
   
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

async function pedirDatos(url){
    const datosDelPokemon = await pedirDatosDelPokemon(url);
    return datosDelPokemon
};


