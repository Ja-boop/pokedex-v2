export default class Pokemon{
    constructor(id, nombre, foto, habilidades = [], tipos = [], movimientos = []) {
        this.id = id;
        this.nombre = nombre;
        this.foto = foto;
        this.habilidades = habilidades;
        this.tipos = tipos;
        this.movimientos = movimientos;
    }
}
