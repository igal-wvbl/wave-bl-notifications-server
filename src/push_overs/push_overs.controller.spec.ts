import { Test, TestingModule } from '@nestjs/testing';
import { PushOversController } from './push_overs.controller';
import { PushOversService } from './push_overs.service';

describe('PushOversController', () => {
  let controller: PushOversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushOversController],
      providers: [PushOversService],
    }).compile();

    controller = module.get<PushOversController>(PushOversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
