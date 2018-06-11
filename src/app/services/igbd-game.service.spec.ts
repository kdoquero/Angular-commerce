import { TestBed, inject } from '@angular/core/testing';

import { IgbdGameService } from './igbd-game.service';

describe('IgbdGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IgbdGameService]
    });
  });

  it('should be created', inject([IgbdGameService], (service: IgbdGameService) => {
    expect(service).toBeTruthy();
  }));
});
