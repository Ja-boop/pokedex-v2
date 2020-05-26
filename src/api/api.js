export async function pedirTodosLosPokemonesAPI() {
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
        const data = await respuesta.json()
        return data
    }

    catch(error) {
        console.log(error + "Hubo un error en la peticion")
    }
    
}
