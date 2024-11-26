import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EscuelaDirec } from '../models/escuela-direc';

@Injectable({
  providedIn: 'root'
})
export class EscuelaDirecService {
  private apiUrl = 'http://localhost:8080/api/Escuela';

  constructor(private http: HttpClient) {}

  getEscuelasByFacultad(facultadId: number): Observable<EscuelaDirec[]> {
    return this.http.get<EscuelaDirec[]>(`${this.apiUrl}/facultad/${facultadId}`);
  }
  
  getEscuela(): Observable<EscuelaDirec[]> {
    return this.http.get<EscuelaDirec[]>(this.apiUrl);
  }

  getEscuelaById(id: number): Observable<EscuelaDirec> {
    return this.http.get<EscuelaDirec>(`${this.apiUrl}/${id}`);
  }

  createEscuela(escuelaProfesional: EscuelaDirec): Observable<EscuelaDirec> {
    return this.http.post<EscuelaDirec>(this.apiUrl, escuelaProfesional);
  }

  updateEscuela(escuelaProfesional: EscuelaDirec, id: number): Observable<EscuelaDirec> {
    return this.http.put<EscuelaDirec>(`${this.apiUrl}/${id}`, escuelaProfesional);
  }

  deleteEscuela(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
