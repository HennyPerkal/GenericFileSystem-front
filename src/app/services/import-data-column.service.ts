import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImportDataColumnComponent } from '../component/import-data-column/import-data-column.component';
import { ImportDataSourceColumn } from '../models/ImportDataSourceColumn';

@Injectable({
  providedIn: 'root'
})

export class ImportDataColumnService {
  constructor(private http: HttpClient) { }
  private apiUrl = `https://localhost:7150/api/ImportDataSourceColumn`

  addColumn(columnDetails: ImportDataSourceColumn): Observable<any> {
    const url = `${this.apiUrl}`;
    console.log("projectService", columnDetails);
    return this.http.post(url, columnDetails, { responseType: 'text' });
  }


}
