import { Test, TestingModule } from '@nestjs/testing';
import { EspecieArboreaController } from './especie_arborea.controller';
import { EspecieArboreaService } from './especie_arborea.service';

describe('EspecieArboreaController', () => {
  let controller: EspecieArboreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecieArboreaController],
      providers: [EspecieArboreaService],
    }).compile();

    controller = module.get<EspecieArboreaController>(EspecieArboreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
