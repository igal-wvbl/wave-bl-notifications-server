import { Controller, Get, Param } from '@nestjs/common';
import { GreeterService } from './greeter.service';

@Controller('greeter')
export class GreeterController {
  constructor(private readonly greeterService: GreeterService) {}

  @Get(':language')
  greet(@Param('language') language: string): string {
    return this.greeterService.greet(language);
  }
}
