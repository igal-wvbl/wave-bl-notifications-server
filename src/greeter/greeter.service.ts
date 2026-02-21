import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class GreeterService {
  private readonly greetings: Record<string, string> = {
    english: 'Hello!',
    hebrew: 'שלום!',
    thai: 'สวัสดี!',
  };

  greet(language: string): string {
    const normalizedLanguage = language.toLowerCase();
    const greeting = this.greetings[normalizedLanguage];

    if (!greeting) {
      throw new BadRequestException(
        'Unsupported language. Please choose Hebrew, English, or Thai.',
      );
    }

    return greeting;
  }
}
