import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDataSourceComponent } from './import-data-source.component';

describe('ImportDataSourceComponent', () => {
  let component: ImportDataSourceComponent;
  let fixture: ComponentFixture<ImportDataSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportDataSourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
