import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaDirec } from '../models/persona-direc';

@Injectable({
  providedIn: 'root'
})
export class PersonaDirecService {
  private apiUrl = 'http://localhost:8080/api/personas';

  constructor(private http: HttpClient) { }

  getPersona(): Observable<PersonaDirec[]> {
    return this.http.get<PersonaDirec[]>(this.apiUrl);
  }

  getPersonaById(id: number): Observable<PersonaDirec> {
    return this.http.get<PersonaDirec>(`${this.apiUrl}/${id}`);
  }

  createPersona(categoria: PersonaDirec): Observable<PersonaDirec> {
    return this.http.post<PersonaDirec>(this.apiUrl, categoria);
  }

  updatePersona(categoria: PersonaDirec, id: number): Observable<PersonaDirec> {
    return this.http.put<PersonaDirec>(`${this.apiUrl}/${id}`, categoria);
  }

  deletePersona(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
