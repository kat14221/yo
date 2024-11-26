import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CampusDirec } from '../models/campus-direc';

@Injectable({
  providedIn: 'root'
})
export class CampusDirecService {
  private apiUrl = 'http://localhost:8080/api/campus';

  constructor(private http: HttpClient) {}

  getCampus(): Observable<CampusDirec[]> {
    return this.http.get<CampusDirec[]>(this.apiUrl);
  }

  getCampusById(id: number): Observable<CampusDirec> {
    return this.http.get<CampusDirec>(`${this.apiUrl}/${id}`);
  }

  createCampus(campus: CampusDirec): Observable<CampusDirec> {
    return this.http.post<CampusDirec>(this.apiUrl, campus);
  }

  updateCampus(campus: CampusDirec, id: number): Observable<CampusDirec> {
    return this.http.put<CampusDirec>(`${this.apiUrl}/${id}`, campus);
  }

  deleteCampus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
