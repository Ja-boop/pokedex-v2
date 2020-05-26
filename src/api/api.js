export async function pedirTodosLosPokemonesAPI() {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
    const data = await respuesta.json()
    return data.results
}
