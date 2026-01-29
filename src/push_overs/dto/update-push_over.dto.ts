import { PartialType } from '@nestjs/mapped-types';
import { CreatePushOverDto } from './create-push_over.dto';

export class UpdatePushOverDto extends PartialType(CreatePushOverDto) {}
