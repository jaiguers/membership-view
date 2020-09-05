import { TestBed } from '@angular/core/testing';

import { CommitteesService } from './committees.service';

describe('CommitteesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommitteesService = TestBed.get(CommitteesService);
    expect(service).toBeTruthy();
  });
});
