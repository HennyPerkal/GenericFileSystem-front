import { TestBed } from '@angular/core/testing';

import { BuildTablesService } from './build-tables.service';

describe('BuildTablesService', () => {
  let service: BuildTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
