import { PersonaDirec } from "./persona-direc";

export class UsuarioDirec {
    id!:number;
    clave!:string;
    estado!:string;
    usuario!:string;
    persona!:PersonaDirec;

    constructor(id: number = 0, clave:string = '', estado:string = '', usuario:string = '', persona: PersonaDirec = new PersonaDirec()) {
        this.id = id;
        this.clave = clave;
        this.estado = estado;
        this.usuario = usuario;  
        this.persona = persona;// Asigna un objeto Especialidad
    }
}
