import { Injectable } from '@nestjs/common';
import { CreateBucNotificationDto } from './dto/create-buc-notification.dto';
import { UpdateBucNotificationDto } from './dto/update-buc-notification.dto';

@Injectable()
export class BucNotificationsService {
  create(createBucNotificationDto: CreateBucNotificationDto) {
    return 'This action adds a new bucNotification';
  }

  findAll() {
    return `This action returns all bucNotifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bucNotification`;
  }

  update(id: number, updateBucNotificationDto: UpdateBucNotificationDto) {
    return `This action updates a #${id} bucNotification`;
  }

  remove(id: number) {
    return `This action removes a #${id} bucNotification`;
  }
}
