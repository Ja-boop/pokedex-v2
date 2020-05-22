export function cargarTodosLosPokemones() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
    .then(respuesta => respuesta.json())
    .then(pokemon => {
        console.log(pokemon);
    })
}
