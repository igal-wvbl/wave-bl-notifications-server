import { Test, TestingModule } from '@nestjs/testing';
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
});
