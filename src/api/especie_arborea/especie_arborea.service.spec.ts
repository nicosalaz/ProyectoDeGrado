import { Test, TestingModule } from '@nestjs/testing';
import { EspecieArboreaService } from './especie_arborea.service';

describe('EspecieArboreaService', () => {
  let service: EspecieArboreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecieArboreaService],
    }).compile();

    service = module.get<EspecieArboreaService>(EspecieArboreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
