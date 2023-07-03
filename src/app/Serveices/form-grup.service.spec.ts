import { TestBed } from '@angular/core/testing';

import { FormGrupService } from './form-grup.service';

describe('FormGrupService', () => {
  let service: FormGrupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGrupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
