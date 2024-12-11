import { TestBed } from '@angular/core/testing';

import { ImportDataColumnService } from './import-data-column.service';

describe('ImportDataColumnService', () => {
  let service: ImportDataColumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportDataColumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
