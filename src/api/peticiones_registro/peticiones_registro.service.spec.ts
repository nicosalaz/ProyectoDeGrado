import { Test, TestingModule } from '@nestjs/testing';
import { PeticionesRegistroService } from './peticiones_registro.service';

describe('PeticionesRegistroService', () => {
  let service: PeticionesRegistroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeticionesRegistroService],
    }).compile();

    service = module.get<PeticionesRegistroService>(PeticionesRegistroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
