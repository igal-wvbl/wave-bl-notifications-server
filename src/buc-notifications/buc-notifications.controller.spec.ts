import { Test, TestingModule } from '@nestjs/testing';
import { BucNotificationsController } from './buc-notifications.controller';
import { BucNotificationsService } from './buc-notifications.service';

describe('BucNotificationsController', () => {
  let controller: BucNotificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BucNotificationsController],
      providers: [BucNotificationsService],
    }).compile();

    controller = module.get<BucNotificationsController>(BucNotificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
