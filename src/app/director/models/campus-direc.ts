export class CampusDirec {
    idCampus: number;
    sede: string;

    constructor(idCampus: number = 0, sede: string = '') {
        this.idCampus = idCampus;
        this.sede = sede;
    }
}
