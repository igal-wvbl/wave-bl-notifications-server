import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PushOversService } from './push_overs.service';
import { CreatePushOverDto } from './dto/create-push_over.dto';
import { UpdatePushOverDto } from './dto/update-push_over.dto';
import {SendNotificationRequestDto} from "./dto/SendNotificationRequestDto";

@Controller('push-overs')
export class PushOversController {
  constructor(private readonly pushOversService: PushOversService) {}

  @Post('send-notification')
  public async sendNotification(@Body() sendNotificationRequestDto: SendNotificationRequestDto): Promise<any> {
    return await this.pushOversService.sendNotification(sendNotificationRequestDto);
  }

  // @Post()
  // create(@Body() createPushOverDto: CreatePushOverDto) {
  //   return this.pushOversService.create(createPushOverDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.pushOversService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.pushOversService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePushOverDto: UpdatePushOverDto) {
  //   return this.pushOversService.update(+id, updatePushOverDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pushOversService.remove(+id);
  // }
}
