import { Test, TestingModule } from '@nestjs/testing';
import { BucNotificationsService } from './buc-notifications.service';

describe('BucNotificationsService', () => {
  let service: BucNotificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BucNotificationsService],
    }).compile();

    service = module.get<BucNotificationsService>(BucNotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
