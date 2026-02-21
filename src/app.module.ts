import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BucNotificationsModule } from './buc-notifications/buc-notifications.module';
import { PushOversModule } from "./push_overs/push_overs.module";
import { GreeterModule } from './greeter/greeter.module';

@Module({
  imports: [BucNotificationsModule, PushOversModule, GreeterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
