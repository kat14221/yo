import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolDirec } from '../models/rol-direc';

@Injectable({
  providedIn: 'root'
})
export class RolDirecService {
  private apiUrl = 'http://localhost:8080/api/rol';

  constructor(private http: HttpClient) { }

  getRoles(): Observable<RolDirec[]> {
    return this.http.get<RolDirec[]>(this.apiUrl);
  }

  getRolesById(id: number): Observable<RolDirec[]> {
    return this.http.get<RolDirec[]>(`${this.apiUrl}/${id}`);
}
  

  createRoles(categoria: RolDirec): Observable<RolDirec> {
    return this.http.post<RolDirec>(this.apiUrl, categoria);
  }

  updateRoles(categoria: RolDirec, id: number): Observable<RolDirec> {
    return this.http.put<RolDirec>(`${this.apiUrl}/${id}`, categoria);
  }

  deleteRoles(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
