import { BadRequestException } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorOperandsDto } from './dto/calculator-operands.dto';
import { DivideOperandsDto } from './dto/divide-operands.dto';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it('adds two numbers', () => {
    expect(service.add(new CalculatorOperandsDto(10, 5))).toBe(15);
  });

  it('subtracts two numbers', () => {
    expect(service.subtract(new CalculatorOperandsDto(10, 5))).toBe(5);
  });

  it('multiplies two numbers', () => {
    expect(service.multiply(new CalculatorOperandsDto(10, 5))).toBe(50);
  });

  it('divides two numbers', () => {
    expect(service.divide(new DivideOperandsDto(10, 5))).toBe(2);
  });

  it('raises a number to a power', () => {
    expect(service.power(new CalculatorOperandsDto(2, 3))).toBe(8);
  });

  it('throws when creating dto with invalid numbers', () => {
    expect(() => CalculatorOperandsDto.fromRouteParams('abc', '5')).toThrow(
      BadRequestException,
    );
  });

  it('throws when creating divide dto with zero divisor', () => {
    expect(() => DivideOperandsDto.fromRouteParams('10', '0')).toThrow(
      BadRequestException,
    );
  });
});
