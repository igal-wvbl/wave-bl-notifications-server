import { BadRequestException } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it('adds two numbers', () => {
    expect(service.add('10', '5')).toBe(15);
  });

  it('subtracts two numbers', () => {
    expect(service.subtract('10', '5')).toBe(5);
  });

  it('multiplies two numbers', () => {
    expect(service.multiply('10', '5')).toBe(50);
  });

  it('throws when receiving invalid numbers', () => {
    expect(() => service.add('abc', '5')).toThrow(BadRequestException);
  });
});
