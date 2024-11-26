import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorDirec } from '../models/tutor-direc';

@Injectable({
  providedIn: 'root'
})
export class TutorDirecService {
  private apiUrl = 'http://localhost:8080/api/tutor';
  constructor(private http:HttpClient) { }
  getTutor(): Observable<TutorDirec[]> {
    return this.http.get<TutorDirec[]>(this.apiUrl);
  }

  getTutorById(id: number): Observable<TutorDirec[]> {
    return this.http.get<TutorDirec[]>(`${this.apiUrl}/${id}`);
}
  

  createTutor(categoria: TutorDirec): Observable<TutorDirec> {
    return this.http.post<TutorDirec>(this.apiUrl, categoria);
  }

  updateTutor(categoria: TutorDirec, id: number): Observable<TutorDirec> {
    return this.http.put<TutorDirec>(`${this.apiUrl}/${id}`, categoria);
  }

  deleteTutor(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
