import { TestBed } from '@angular/core/testing';

import { CreacionDeReferenciasService } from './creacion-de-referencias.service';

describe('CreacionDeReferenciasService', () => {
  let service: CreacionDeReferenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreacionDeReferenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
