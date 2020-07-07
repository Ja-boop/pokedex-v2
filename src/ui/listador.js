import { servicioPedirPokemon } from '../servicio/servicio.js'
import { mapearPokemon } from "../mapeadores/mapeadores.js";
const $fotoPrincpial = document.querySelector('#imagen-pokemon');
const $tiposPokemon = document.querySelector('#tipos-pokemon');

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
            let pokemonData = await servicioPedirPokemon(url);

            let clasePokemon = mapearPokemon(pokemonData);

            console.log(clasePokemon.tipos);
            mostrarPokemonMapeado(clasePokemon.foto, clasePokemon.tipos);
        });
    }
   
}

function mostrarPokemonMapeado(fotoPrincpial, tipos){
    $fotoPrincpial.innerHTML = "";
    $fotoPrincpial.innerHTML += `<img src="${fotoPrincpial}">`

    $tiposPokemon.innerHTML = "";
    let i;
    for (i = 0; i < tipos.length; i++){
        $tiposPokemon.innerHTML += tipos[i];
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


