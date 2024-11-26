import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImportDataSourceColumn } from '../../models/ImportDataSourceColumn';
import { ImportDataColumnService } from '../../services/import-data-column.service';

@Component({
  selector: 'app-import-data-column',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './import-data-column.component.html',
  styleUrl: './import-data-column.component.css'
})
export class ImportDataColumnComponent {


  constructor(private MyImportDataColumnService: ImportDataColumnService) {

  }

  ArrNews: ImportDataSourceColumn[] = []
  columnsCount: number = 0; // מספר העמודות שהמשתמש בחר
  columnsEn: string[] = []; // רשימה של שמות העמודות
  columnsHeb: string[] = [];
  // פונקציה שמעדכנת את מספר העמודות בטבלה
  updateTable() {
    this.columnsEn = new Array(this.columnsCount).fill(''); // יוצרת מערך של כמות העמודות שהמשתמש ביקש
    this.columnsHeb = new Array(this.columnsCount).fill(''); // יוצרת מערך של כמות העמודות שהמשתמש ביקש

  }
  onSubmit(): void {

    debugger
    console.log('Submitted data:');
    for (const key in this.columnsEn) {
      var a = new ImportDataSourceColumn();
      a.ColumnName = this.columnsEn[key]
      a.ColumnNameHebDescription = this.columnsHeb[key]
      a.ImportDataSourceId = 2
      this.ArrNews.push(a)
    }
this.createTbl(this.ArrNews)
  }
  createTbl(arr: ImportDataSourceColumn[]) {
    for (let index = 0; index < arr.length; index++) {
      this.MyImportDataColumnService.addColumn(arr[index])
        .subscribe(
          (response) => {
            console.log("gft6u78io9ihjgf")
          }

        )
    }
  }
}


