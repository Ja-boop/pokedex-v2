import { ListadoPokemones } from "../entidades/listadoPokemones.js";
import { Movimientos } from "../entidades/movimientos.js";
import { Pokemon } from "../entidades/pokemon.js";

export function mapearPokemon(datosApi) {
    const {
        id,
        name: nombre,
        sprites: { front_default: fotoPrincipal },
        types: tipos,
        abilities: habilidades,
        moves: movimientos,
    } = datosApi;

    return new Pokemon(
        id,
        nombre,
        fotoPrincipal,
        habilidades.map((item) => item.ability.name),
        tipos.map((item) => item.type.name),
        movimientos.map((item) => new Movimientos(
            item.move.name,
            item.version_group_details.map((v) => v.version_group.name),
        ))
    );
}

export function mapearListadoPokemones(datosApi){
    const {
        results: resultados,
    } = datosApi;

    return new ListadoPokemones(
        resultados
    );
}
