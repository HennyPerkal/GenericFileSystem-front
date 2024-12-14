import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImportDataSource } from '../models/ImportDataSource';
import { tap } from 'rxjs';
import { ImportDataSourceComponent } from '../component/import-data-source/import-data-source.component';

@Injectable({
  providedIn: 'root',
})
export class ImportDataSourceService {
  private baseUrl = 'https://localhost:7150/api/ImportDataSource'; 

  constructor(private http: HttpClient) {}

  createImportDataSource(data: ImportDataSource): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post(`${this.baseUrl}`, data, { headers })
      .pipe(
        tap((response) => {
          // כאן אנחנו מכתיבים ש-TypeScript יתייחס לתשובה כאובייקט שמכיל את dataSourceTypeId
          const dataSourceTypeId = (response as { dataSourceTypeId: number }).dataSourceTypeId;
  
          if (dataSourceTypeId !== undefined) {
            localStorage.setItem('dataSourceTypeId', dataSourceTypeId.toString());
            console.log("dataSourceTypeId:", dataSourceTypeId);
          } else {
            console.error('dataSourceTypeId לא נמצא בתשובה');
          }
        })
      );
  }
  
}  