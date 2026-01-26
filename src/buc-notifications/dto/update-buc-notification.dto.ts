import { PartialType } from "@nestjs/mapped-types";
import { CreateBucNotificationDto } from './create-buc-notification.dto';

export class UpdateBucNotificationDto extends PartialType(CreateBucNotificationDto) {}
