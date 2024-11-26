import { Routes } from '@angular/router';
import { ImportDataColumnComponent } from './component/import-data-column/import-data-column.component';

export const routes: Routes = [
{path:'add table',component:ImportDataColumnComponent},
//{ path: '', component: ImportDataColumnComponent }, // נתיב ברירת מחדל = [
    { path: '', redirectTo: '/import-data-column', pathMatch: 'full' }






];
