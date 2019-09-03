import { TestBed } from '@angular/core/testing';

import { LoveletterService } from './loveletter.service';

describe('LoveletterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoveletterService = TestBed.get(LoveletterService);
    expect(service).toBeTruthy();
  });
});
