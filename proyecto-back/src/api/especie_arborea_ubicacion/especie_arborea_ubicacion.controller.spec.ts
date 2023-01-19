import { Test, TestingModule } from '@nestjs/testing';
import { EspecieArboreaUbicacionController } from './especie_arborea_ubicacion.controller';
import { EspecieArboreaUbicacionService } from './especie_arborea_ubicacion.service';

describe('EspecieArboreaUbicacionController', () => {
  let controller: EspecieArboreaUbicacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecieArboreaUbicacionController],
      providers: [EspecieArboreaUbicacionService],
    }).compile();

    controller = module.get<EspecieArboreaUbicacionController>(EspecieArboreaUbicacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
