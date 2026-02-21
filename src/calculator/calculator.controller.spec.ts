import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';

describe('CalculatorController', () => {
  let controller: CalculatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorController],
      providers: [CalculatorService],
    }).compile();

    controller = module.get<CalculatorController>(CalculatorController);
  });

  it('adds two numbers', () => {
    expect(controller.add('8', '2')).toBe(10);
  });

  it('subtracts two numbers', () => {
    expect(controller.subtract('8', '2')).toBe(6);
  });

  it('multiplies two numbers', () => {
    expect(controller.multiply('8', '2')).toBe(16);
  });

  it('divides two numbers', () => {
    expect(controller.divide('8', '2')).toBe(4);
  });

  it('raises a number to a power', () => {
    expect(controller.power('2', '3')).toBe(8);
  });

  it('throws when receiving invalid numbers', () => {
    expect(() => controller.add('abc', '2')).toThrow(BadRequestException);
  });

  it('throws when dividing by zero', () => {
    expect(() => controller.divide('10', '0')).toThrow(BadRequestException);
  });
});
