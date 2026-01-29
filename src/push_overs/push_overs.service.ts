import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import {SendNotificationRequestDto} from "./dto/SendNotificationRequestDto";

@Injectable()
export class PushOversService {
  constructor() {
    //this.pushover = new PushOver(

    // )
  }

  public async sendNotification(dto: SendNotificationRequestDto): Promise<any> {
    const url = 'https://api.pushover.net/1/messages.json';
    const payload = {
      token: 'the-token-from-env',
      user: 'the-user-from-env',
      message: dto.message,
      title: dto.title || 'NestJS Alert',
    };

    try {
      const response = await axios.post(url, payload);
      return response.data;
    } catch (error) {
      throw new Error(`Pushover failed: ${error}`);
    }
  }
}
