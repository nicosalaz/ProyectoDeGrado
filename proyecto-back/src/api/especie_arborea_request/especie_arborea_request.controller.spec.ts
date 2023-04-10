import { Test, TestingModule } from '@nestjs/testing';
import { EspecieArboreaRequestController } from './especie_arborea_request.controller';
import { EspecieArboreaRequestService } from './especie_arborea_request.service';

describe('EspecieArboreaRequestController', () => {
  let controller: EspecieArboreaRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecieArboreaRequestController],
      providers: [EspecieArboreaRequestService],
    }).compile();

    controller = module.get<EspecieArboreaRequestController>(EspecieArboreaRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
