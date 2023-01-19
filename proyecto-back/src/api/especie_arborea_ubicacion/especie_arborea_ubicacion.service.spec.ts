import { Test, TestingModule } from '@nestjs/testing';
import { EspecieArboreaUbicacionService } from './especie_arborea_ubicacion.service';

describe('EspecieArboreaUbicacionService', () => {
  let service: EspecieArboreaUbicacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecieArboreaUbicacionService],
    }).compile();

    service = module.get<EspecieArboreaUbicacionService>(EspecieArboreaUbicacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
