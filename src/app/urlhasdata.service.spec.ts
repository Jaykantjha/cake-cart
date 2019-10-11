import { TestBed } from '@angular/core/testing';

import { UrlHasDataActivate } from './urlhasdata.service';

describe('UrlhasdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlHasDataActivate = TestBed.get(UrlHasDataActivate);
    expect(service).toBeTruthy();
  });
});
