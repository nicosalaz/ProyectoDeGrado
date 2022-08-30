import { Test, TestingModule } from '@nestjs/testing';
import { IdentificacionController } from './identificacion.controller';
import { IdentificacionService } from './identificacion.service';

describe('IdentificacionController', () => {
  let controller: IdentificacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdentificacionController],
      providers: [IdentificacionService],
    }).compile();

    controller = module.get<IdentificacionController>(IdentificacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
