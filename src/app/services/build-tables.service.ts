import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImportDataSource } from '../models/ImportDataSource';

@Injectable({
  providedIn: 'root',
})
export class BuildTableService {
  private baseUrl = 'https://localhost:7150/api/ImportData/process-tables'; 

  constructor(private http: HttpClient) {}

  processTables(): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/process-tables`, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
