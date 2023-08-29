import { TestBed } from '@angular/core/testing';

import { DepositmoneyService } from './depositmoney.service';

describe('DepositmoneyService', () => {
  let service: DepositmoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositmoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
