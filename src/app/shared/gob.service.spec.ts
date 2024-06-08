import { TestBed } from '@angular/core/testing';

import { GobService } from './gob.service';

describe('GobService', () => {
  let service: GobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
