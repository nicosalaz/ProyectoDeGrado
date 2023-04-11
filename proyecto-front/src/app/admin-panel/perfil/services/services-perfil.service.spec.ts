import { TestBed } from '@angular/core/testing';

import { ServicesPerfilService } from './services-perfil.service';

describe('ServicesPerfilService', () => {
  let service: ServicesPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
