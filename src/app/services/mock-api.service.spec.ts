import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockApiService } from './mock-api.service';
import { HeroeModel } from '../models/heroeModel';

describe('MockApiService', () => {
  let service: MockApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MockApiService]
    });
    service = TestBed.inject(MockApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve heroes GET', () => {
    const mockHeroes: HeroeModel[] = [{ id: 1, name: 'Hero 1' }, { id: 2, name: 'Hero 2' }];

    // Expect that mockHeroes are retrieved
    service.getHeroes().subscribe((heroes: HeroeModel[]) => {
      expect(heroes).toEqual(mockHeroes);
    });

    // Expect the request to be a GET request
    const mockRequest = httpTestingController.expectOne('api/heroes');
    expect(mockRequest.request.method).toEqual('GET');

    // Simulate the response
    mockRequest.flush(mockHeroes);
  });

});
