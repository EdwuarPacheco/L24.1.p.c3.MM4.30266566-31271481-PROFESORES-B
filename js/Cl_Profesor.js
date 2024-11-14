export default class Cl_Profesor {
    constructor(cedula, nombre, sexo) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.sexo = sexo;
    }
    set cedula(cedula) {
        this._cedula = +cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
}