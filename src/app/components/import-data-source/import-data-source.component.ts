import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImportDataSourceService } from '../../services/import-data-source.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ImportDataSource } from '../../models/ImportDataSource';

@Component({
  selector: 'app-import-data-source',
  standalone: true,
  templateUrl: './import-data-source.component.html',
  styleUrls: ['./import-data-source.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class ImportDataSourceComponent implements OnInit {
  importDataSourceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private importDataSourceService: ImportDataSourceService
  ) {
    this.importDataSourceForm = this.fb.group({
      importDataSourceId: [null, Validators.required],
      importDataSourceDesc: [''],
      systemTypeId: [null],
      jobName: [''],
      urlFile: ['', Validators.required],
      urlFileAfterProcess: ['', Validators.required],
      email: ['', Validators.email],
      dataSourceTypeId: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.importDataSourceForm.valid) {
      const data: ImportDataSource = this.importDataSourceForm.value;
      this.importDataSourceService.createImportDataSource(data).subscribe({
        next: (response) => {
          alert('Import Data Source successfully created!');
          this.importDataSourceForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('Failed to create Import Data Source.');
        },
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
