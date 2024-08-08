import { TestBed } from '@angular/core/testing';

import { BLibService } from './b-lib.service';

describe('BLibService', () => {
  let service: BLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
