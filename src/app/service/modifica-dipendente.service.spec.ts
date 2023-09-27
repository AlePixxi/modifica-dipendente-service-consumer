import { TestBed } from '@angular/core/testing';

import { ModificaDipendenteService } from './modifica-dipendente.service';

describe('ModificaDipendenteService', () => {
  let service: ModificaDipendenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificaDipendenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
