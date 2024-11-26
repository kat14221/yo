import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDirec } from '../models/usuario-direc';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDirecService {
  
  private apiUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<UsuarioDirec[]> {
    return this.http.get<UsuarioDirec[]>(this.apiUrl);
  }

  getUsuarioById(id: number): Observable<UsuarioDirec> {
    return this.http.get<UsuarioDirec>(`${this.apiUrl}/${id}`);
  }

  createUsuario(usuario: UsuarioDirec): Observable<UsuarioDirec> {
    return this.http.post<UsuarioDirec>(this.apiUrl, usuario);
  }

  updateUsuario(usuario: UsuarioDirec, id: number): Observable<UsuarioDirec> {
    return this.http.put<UsuarioDirec>(`${this.apiUrl}/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
