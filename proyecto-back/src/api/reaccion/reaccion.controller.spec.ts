import { Test, TestingModule } from '@nestjs/testing';
import { ReaccionController } from './reaccion.controller';
import { ReaccionService } from './reaccion.service';

describe('ReaccionController', () => {
  let controller: ReaccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReaccionController],
      providers: [ReaccionService],
    }).compile();

    controller = module.get<ReaccionController>(ReaccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
