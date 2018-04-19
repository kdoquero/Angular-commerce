import { TestBed, inject } from '@angular/core/testing';

import { ApiGamesService } from './api-games.service';

describe('ApiGamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiGamesService]
    });
  });

  it('should be created', inject([ApiGamesService], (service: ApiGamesService) => {
    expect(service).toBeTruthy();
  }));
});
