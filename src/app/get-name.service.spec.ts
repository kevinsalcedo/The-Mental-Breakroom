import { TestBed, inject } from '@angular/core/testing';

import { GetNameService } from './get-name.service';

describe('GetNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNameService]
    });
  });

  it('should be created', inject([GetNameService], (service: GetNameService) => {
    expect(service).toBeTruthy();
  }));
});
