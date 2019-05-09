import { TestBed } from '@angular/core/testing';

import { HttpGetdataDbService } from './http-getdata-db.service';

describe('HttpGetdataDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpGetdataDbService = TestBed.get(HttpGetdataDbService);
    expect(service).toBeTruthy();
  });
});
