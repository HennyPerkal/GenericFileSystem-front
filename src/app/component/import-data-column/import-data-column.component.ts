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

  constructor(private MyImportDataColumnService: ImportDataColumnService) {}
  orderNum:number=1;
  ArrNews: ImportDataSourceColumn[] = [];
  columnsCount: number = 0; // מספר העמודות שהמשתמש בחר
  columns: { en: string, heb: string }[] = []; // רשימה של אובייקטים שמכילים את הערכים של העמודות באנגלית ובעברית

  // פונקציה שמעדכנת את מספר העמודות בטבלה
  updateTable() {
    // יצירת מערך של אובייקטים חדשים לכל עמודה
    this.columns = Array(this.columnsCount).fill(null).map(() => ({ en: '', heb: '' }));
  }
  

  onSubmit(): void {
    console.log('Submitted data:', this.columns);  // נוודא שהנתונים מתקבלים נכון
    
    // אם המערך ריק, אין צורך לשלוח אותו לשרת
    if (this.columns.length === 0) {
      console.log("No columns to submit");
      return;
    }
  
    const ArrNews: ImportDataSourceColumn[] = [];
  
    // נוודא שכל עמודה שיש לה ערכים באנגלית ובעברית תיכנס
    this.columns.forEach(column => {
      if (column.en && column.heb) {
        const a = new ImportDataSourceColumn();
        a.ColumnName = column.en;
        a.ColumnNameHebDescription = column.heb;
        a.OrderId=this.orderNum++
        a.ImportDataSourceId = 2;
        ArrNews.push(a);
      }
    });
  
    if (ArrNews.length > 0) {
      console.log("Data ready for submission:", ArrNews);
      this.createTbl(ArrNews);
    } else {
      console.log("No valid data to submit.");
    }
  }
  
  createTbl(arr: ImportDataSourceColumn[]) {
    for (let index = 0; index < arr.length; index++) {
      this.MyImportDataColumnService.addColumn(arr[index])
        .subscribe(
          (response) => {
            console.log("Column added successfully");
          },
          (error) => {
            console.error("Error adding column:", error);
          }
        );
    }
  }
}
