import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDataSourceFormComponent } from './import-data-source-form.component';

describe('ImportDataSourceFormComponent', () => {
  let component: ImportDataSourceFormComponent;
  let fixture: ComponentFixture<ImportDataSourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportDataSourceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportDataSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
