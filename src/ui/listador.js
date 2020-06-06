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

export async function mostrarInfo(){
    const pokemon = document.querySelector('.list-group-item');
    const url = pokemon.getAttribute('href');
    const datosDelPokemon = await pedirDatosDelPokemon(url);
    pokemon.addEventListener('click', (e) => {
        console.log(datosDelPokemon);
    });
}

export function hidearResultados(){
    const pokemon = document.querySelector('.list-group-item');
    pokemon.addEventListener('blur', (e) => {
        hidearResultadosOnBlur();
    });
}

function hidearResultadosOnBlur(){
    nombrePokemon.style.display = 'none'
}
