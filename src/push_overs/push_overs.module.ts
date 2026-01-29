import { Module } from '@nestjs/common';
import { PushOversService } from './push_overs.service';
import { PushOversController } from './push_overs.controller';

@Module({
  controllers: [PushOversController],
  providers: [PushOversService],
})
export class PushOversModule {}
