import { TestBed } from '@angular/core/testing';

import { MockApiService } from './mock-api.service';
import { HttpClientModule } from '@angular/common/http';
describe('MockApiService', () => {
  let service: MockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // http client

      providers: [MockApiService] // Provide MockApiService or other necessary services
    });
    service = TestBed.inject(MockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
