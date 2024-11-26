export class FacultadDirec {
    idFacultad: number;
    facultad: string;
    idCampus: number;
  
    constructor(idFacultad: number = 0, facultad: string = '', idCampus: number = 0) {
      this.idFacultad = idFacultad;
      this.facultad = facultad;
      this.idCampus = idCampus;
    }
}
