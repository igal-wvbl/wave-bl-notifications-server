import { Test, TestingModule } from '@nestjs/testing';
import { PushOversService } from './push_overs.service';

describe('PushOversService', () => {
  let service: PushOversService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PushOversService],
    }).compile();

    service = module.get<PushOversService>(PushOversService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
