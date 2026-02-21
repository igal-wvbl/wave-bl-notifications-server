import { BadRequestException } from '@nestjs/common';
import { GreeterService } from './greeter.service';

describe('GreeterService', () => {
  let service: GreeterService;

  beforeEach(() => {
    service = new GreeterService();
  });

  it('should greet in English', () => {
    expect(service.greet('english')).toBe('Hello!');
  });

  it('should greet in Hebrew', () => {
    expect(service.greet('hebrew')).toBe('שלום!');
  });

  it('should greet in Thai', () => {
    expect(service.greet('thai')).toBe('สวัสดี!');
  });

  it('should support mixed case language values', () => {
    expect(service.greet('EnGlIsH')).toBe('Hello!');
  });

  it('should throw on unsupported languages', () => {
    expect(() => service.greet('spanish')).toThrow(BadRequestException);
  });
});
