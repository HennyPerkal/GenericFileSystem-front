import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ImportDataColumnComponent } from './component/import-data-column/import-data-column.component';
import { ImportDataSourceColumn } from './models/ImportDataSourceColumn';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenericFileSystem-Front';
}
