import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacultadDirec } from '../models/facultad-direc';

@Injectable({
  providedIn: 'root'
})
export class FacultadDirecService {
  private apiUrl = 'http://localhost:8080/api/facultad';

  constructor(private http: HttpClient) {}
  getFacultadesByCampus(campusId: number): Observable<FacultadDirec[]> {
    return this.http.get<FacultadDirec[]>(`${this.apiUrl}/campus/${campusId}`);
  }

  getFacultades(): Observable<FacultadDirec[]> {
    return this.http.get<FacultadDirec[]>(this.apiUrl);
  }

  getFacultadById(id: number): Observable<FacultadDirec> {
    return this.http.get<FacultadDirec>(`${this.apiUrl}/${id}`);
  }

  createFacultad(facultad: FacultadDirec): Observable<FacultadDirec> {
    return this.http.post<FacultadDirec>(this.apiUrl, facultad);
  }

  updateFacultad(facultad: FacultadDirec, id: number): Observable<FacultadDirec> {
    return this.http.put<FacultadDirec>(`${this.apiUrl}/${id}`, facultad);
  }

  deleteFacultad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
