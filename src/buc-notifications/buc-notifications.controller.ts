import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {BucNotificationsService} from './buc-notifications.service';
import {CreateBucNotificationDto} from './dto/create-buc-notification.dto';
import {UpdateBucNotificationDto} from './dto/update-buc-notification.dto';

@Controller('buc-notifications')
export class BucNotificationsController {
    constructor(private readonly bucNotificationsService: BucNotificationsService) {

    }



    @Post()
    create(@Body() createBucNotificationDto: CreateBucNotificationDto) {
        return this.bucNotificationsService.create(createBucNotificationDto);
    }

    @Get()
    findAll() {
        return "Hello from BucNotificationsController";
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bucNotificationsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBucNotificationDto: UpdateBucNotificationDto) {
        return this.bucNotificationsService.update(+id, updateBucNotificationDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.bucNotificationsService.remove(+id);
    }
}
