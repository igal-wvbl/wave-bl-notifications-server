import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BucNotificationsModule } from './buc-notifications/buc-notifications.module';

@Module({
  imports: [BucNotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
