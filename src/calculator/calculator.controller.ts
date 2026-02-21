import { Controller, Get, Param } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('add/:firstOperand/:secondOperand')
  add(
    @Param('firstOperand') firstOperand: string,
    @Param('secondOperand') secondOperand: string,
  ): number {
    return this.calculatorService.add(firstOperand, secondOperand);
  }

  @Get('subtract/:firstOperand/:secondOperand')
  subtract(
    @Param('firstOperand') firstOperand: string,
    @Param('secondOperand') secondOperand: string,
  ): number {
    return this.calculatorService.subtract(firstOperand, secondOperand);
  }
}
