import { servicioPedirPokemon } from '../servicio/servicio.js';
import { mapearPokemon } from "../mapeadores/mapeadores.js";
const $fotoPrincpial = document.querySelector('#imagen-pokemon');
const $tiposPokemon = document.querySelector('#tipos-pokemon');
const $idPokemon = document.querySelector('#id-pokemon');
const $nombrePokemon = document.querySelector('#nombre-pokemon');



export function mostrarPokemon(pokemones){

    for (const pokemon of pokemones) {
        pokemon.addEventListener('click', async function(e) {
            let url = e.currentTarget.attributes.href.value
            let pokemonData = await servicioPedirPokemon(url);
            let clasePokemon = mapearPokemon(pokemonData);
            mostrarFoto(clasePokemon.foto);
            mostrarID(clasePokemon.id);
            mostrarNombre(clasePokemon.nombre);
            mostrarTipos(clasePokemon.tipos);
        });
    }
   
}

function mostrarFoto(fotoPrincpial){
    $fotoPrincpial.innerHTML = "";
    $fotoPrincpial.innerHTML += `<img src="${fotoPrincpial}">`
}

function mostrarID(id){
    $idPokemon.innerHTML = "";
    $idPokemon.innerHTML = `ID: ${id}`
}

function mostrarNombre(nombre){
    $nombrePokemon.innerHTML = "";
    $nombrePokemon.innerHTML = `Name: ${nombre}`
}

function mostrarTipos(tipos){
    $tiposPokemon.innerHTML = "";
    $tiposPokemon.innerHTML = "Type: ";
    let i;
    for (i = 0; i < tipos.length; i++){
        $tiposPokemon.innerHTML += `${tipos[i]} `;
    }

}
