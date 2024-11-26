import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PracticanteEP } from '../../practicante/administrar-documentos/models/practicante-ep/coordinador-practicante-ep.module'; 
import { Usuario } from '../../practicante/administrar-documentos/models/usuario/coordinador-usuario.module'; 

@Injectable({
  providedIn: 'root'
})
export class PracticanteEPService {
  private apiUrl = 'http://localhost:8080/api/practicante_EPes';

  constructor(private http: HttpClient) {}
  listarPracticantes(): Observable<PracticanteEP[]> {
    return this.http.get<PracticanteEP[]>(`${this.apiUrl}`);
  }

  // Buscar practicantes por filtros
  buscarPracticantes(filtro: any): Observable<PracticanteEP[]> {
    return this.http.post<PracticanteEP[]>(`${this.apiUrl}/buscar`, filtro);
  }
  getPracticantesEP(): Observable<PracticanteEP[]> {
    return this.http.get<PracticanteEP[]>(this.apiUrl);
  }
  getPracticantesByLinea(lineaId: number): Observable<PracticanteEP[]> {
    return this.http.get<PracticanteEP[]>(`${this.apiUrl}/linea/${lineaId}`);
  }
  
  getPracticanteEPById(id: number): Observable<PracticanteEP> {
    return this.http.get<PracticanteEP>(`${this.apiUrl}/${id}`);
  }

  createPracticanteEP(practicanteEP: PracticanteEP): Observable<PracticanteEP> {
    return this.http.post<PracticanteEP>(this.apiUrl, practicanteEP);
  }

  updatePracticanteEP(id: number, practicanteEP: PracticanteEP): Observable<PracticanteEP> {
    return this.http.put<PracticanteEP>(`${this.apiUrl}/${id}`, practicanteEP);
  }

  deletePracticanteEP(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  sendCredentialsToEmail(email: string, usuario: Usuario): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/send-email`, { email, usuario });
  }
}