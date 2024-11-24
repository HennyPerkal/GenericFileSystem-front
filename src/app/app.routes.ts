import { Routes } from '@angular/router';
import { ImportDataSourceComponent } from './component/import-data-source/import-data-source.component';

export const routes: Routes = [
  { path: 'add-import-data-source', component: ImportDataSourceComponent },
  { path: '', redirectTo: '/add-import-data-source', pathMatch: 'full' },
];
