import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specs } from '../Specs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SpecService {
  private apiUrl = 'http://localhost:5000/specs';

  constructor(private http: HttpClient) {}

  getSpecs(): Observable<Specs[]> {
    return this.http.get<Specs[]>(this.apiUrl);
  }

  deleteSpecs(spec: Specs): Observable<Specs> {
    const url = `${this.apiUrl}/${spec.id}`;
    return this.http.delete<Specs>(url);
  }

  updateSpecsReminder(spec: Specs): Observable<Specs> {
    const url = `${this.apiUrl}/${spec.id}`;
    return this.http.put<Specs>(url, spec, httpOptions);
  }

  addSpecs(spec: Specs): Observable<Specs> {
    return this.http.post<Specs>(this.apiUrl, spec, httpOptions);
  }
}