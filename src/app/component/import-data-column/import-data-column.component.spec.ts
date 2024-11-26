import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDataColumnComponent } from './import-data-column.component';

describe('ImportDataColumnComponent', () => {
  let component: ImportDataColumnComponent;
  let fixture: ComponentFixture<ImportDataColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportDataColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportDataColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
