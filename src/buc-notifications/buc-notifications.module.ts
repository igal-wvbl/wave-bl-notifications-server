import { Module } from '@nestjs/common';
import { BucNotificationsService } from './buc-notifications.service';
import { BucNotificationsController } from './buc-notifications.controller';

@Module({
  controllers: [BucNotificationsController],
  providers: [BucNotificationsService],
})
export class BucNotificationsModule {}
