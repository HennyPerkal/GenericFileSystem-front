import { Component } from '@angular/core';
import { BuildTableService } from '../../services/build-tables.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './build-tables.component.html',
  styleUrls: ['./build-tables.component.css']
})
export class ImportDataComponent {
  message: string = '';
  isProcessing: boolean = false;

  constructor(private buildTableService:BuildTableService ) {}

  processTables(): void {
    this.isProcessing = true;
    this.message = 'Processing tables...';

    this.buildTableService.processTables().subscribe({
      next: (response: string) => {
        this.message = response;
        this.isProcessing = false;
      },
      error: (error: any) => {
        this.message = `An error occurred: ${error.error}`;
        this.isProcessing = false;
      }
    });
  }
}
