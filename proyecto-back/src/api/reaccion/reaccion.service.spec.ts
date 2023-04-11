import { Test, TestingModule } from '@nestjs/testing';
import { ReaccionService } from './reaccion.service';

describe('ReaccionService', () => {
  let service: ReaccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReaccionService],
    }).compile();

    service = module.get<ReaccionService>(ReaccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
