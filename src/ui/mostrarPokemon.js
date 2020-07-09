import { servicioPedirPokemon } from '../servicio/servicio.js';
import { mapearPokemon } from "../mapeadores/mapeadores.js";
const $fotoPrincpial = document.querySelector('#imagen-pokemon');
const $tiposPokemon = document.querySelector('#tipos-pokemon');



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
