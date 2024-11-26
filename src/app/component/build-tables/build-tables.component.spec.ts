import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildTablesComponent } from './build-tables.component';

describe('BuildTablesComponent', () => {
  let component: BuildTablesComponent;
  let fixture: ComponentFixture<BuildTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
