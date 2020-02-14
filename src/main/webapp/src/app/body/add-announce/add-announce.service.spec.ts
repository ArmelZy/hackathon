import {TestBed} from '@angular/core/testing';

import {AddAnnounceService} from './add-announce.service';

describe('AddAnnounceService', () => {
  let service: AddAnnounceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAnnounceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
