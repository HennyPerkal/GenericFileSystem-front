import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImportDataSource } from '../models/ImportDataSource';

@Injectable({
  providedIn: 'root',
})
export class ImportDataSourceService {
  private baseUrl = 'https://localhost:7150/api/ImportDataSource'; 

  constructor(private http: HttpClient) {}

  createImportDataSource(data: ImportDataSource): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}`, data, { headers });
  }
}
