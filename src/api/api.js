export let todosLosPokemones = {};

export function cargarTodosLosPokemones(todosLosPokemones) {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
    .then(respuesta => respuesta.json())
    .then(pokemon => {
        todosLosPokemones = pokemon;
        console.log(todosLosPokemones);
    })
}
