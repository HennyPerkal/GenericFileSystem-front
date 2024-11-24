import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImportDataSource } from '../../models/ImportDataSource';



@Component({
  selector: 'app-import-data-source-form',
  standalone: true,
  imports: [FormsModule], // הוספת FormsModule כאן
  templateUrl: './import-data-source-form.component.html',
  styleUrls: ['./import-data-source-form.component.css']
})
export class ImportDataSourceFormComponent implements OnInit {

  importDataSource: ImportDataSource = new ImportDataSource();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Submitted data:', this.importDataSource);
    // כאן תוכל לשלוח את הנתונים לשרת באמצעות HTTP
  }
}
