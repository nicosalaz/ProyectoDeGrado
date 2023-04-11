import { Test, TestingModule } from '@nestjs/testing';
import { EspecieArboreaRequestService } from './especie_arborea_request.service';

describe('EspecieArboreaRequestService', () => {
  let service: EspecieArboreaRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecieArboreaRequestService],
    }).compile();

    service = module.get<EspecieArboreaRequestService>(EspecieArboreaRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
