import { Test, TestingModule } from '@nestjs/testing';
import { PeticionesRegistroController } from './peticiones_registro.controller';
import { PeticionesRegistroService } from './peticiones_registro.service';

describe('PeticionesRegistroController', () => {
  let controller: PeticionesRegistroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeticionesRegistroController],
      providers: [PeticionesRegistroService],
    }).compile();

    controller = module.get<PeticionesRegistroController>(PeticionesRegistroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
