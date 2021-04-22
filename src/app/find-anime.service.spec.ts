import { TestBed } from '@angular/core/testing';

import { FindAnimeService } from './find-anime.service';

describe('FindAnimeService', () => {
  let service: FindAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
