import { TestBed } from '@angular/core/testing';

import { PiePaginaService } from './pie-pagina.service';

describe('PiePaginaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiePaginaService = TestBed.get(PiePaginaService);
    expect(service).toBeTruthy();
  });
});
