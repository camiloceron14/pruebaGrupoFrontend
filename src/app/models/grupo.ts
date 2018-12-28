export class Grupo {

    constructor(codigo=0,codGrupo=0, nombre='', codPadre=0, orden=0){
        this.codigo = codigo;
        this.codGrupo = codGrupo;
        this.nombre = nombre;
        this.codPadre = codPadre;
        this.orden =  orden;
    }


    codigo: number;
    codGrupo: number;
    nombre: string;
    codPadre: number;
    orden: number;
}
