import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {ContactFormADto} from "./app-dtos/ContactFormADto";
import {IncomingBusinessUnitRequestDto} from "./app-dtos/IncomingBusinessUnitRequestDto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/incomingBusinessCard")
  public async incomingBusinessCard(@Body() dto: IncomingBusinessUnitRequestDto): Promise<string> {
    console.log('incomingBusinessCard called');

    const s = JSON.stringify(dto, null, 4);
    console.log(s);
    return s;
  }
}
