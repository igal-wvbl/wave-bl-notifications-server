import { Controller, Get, Param } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorOperandsDto } from './dto/calculator-operands.dto';
import { DivideOperandsDto } from './dto/divide-operands.dto';
import { SingleOperandDto } from './dto/single-operand.dto';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('add/:firstOperand/:secondOperand')
  add(
    @Param('firstOperand') firstOperand: string,
    @Param('secondOperand') secondOperand: string,
  ): number {
    const operands = CalculatorOperandsDto.fromRouteParams(
      firstOperand,
      secondOperand,
    );
    return this.calculatorService.add(operands);
  }

  @Get('subtract/:firstOperand/:secondOperand')
  subtract(
    @Param('firstOperand') firstOperand: string,
    @Param('secondOperand') secondOperand: string,
  ): number {
    const operands = CalculatorOperandsDto.fromRouteParams(
      firstOperand,
      secondOperand,
    );
    return this.calculatorService.subtract(operands);
  }

  @Get('multiply/:firstOperand/:secondOperand')
  multiply(
    @Param('firstOperand') firstOperand: string,
    @Param('secondOperand') secondOperand: string,
  ): number {
    const operands = CalculatorOperandsDto.fromRouteParams(
      firstOperand,
      secondOperand,
    );
    return this.calculatorService.multiply(operands);
  }

  @Get('divide/:firstOperand/:secondOperand')
  divide(
    @Param('firstOperand') firstOperand: string,
    @Param('secondOperand') secondOperand: string,
  ): number {
    const operands = DivideOperandsDto.fromRouteParams(
      firstOperand,
      secondOperand,
    );
    return this.calculatorService.divide(operands);
  }

  @Get('power/:firstOperand/:secondOperand')
  power(
    @Param('firstOperand') firstOperand: string,
    @Param('secondOperand') secondOperand: string,
  ): number {
    const operands = CalculatorOperandsDto.fromRouteParams(
      firstOperand,
      secondOperand,
    );
    return this.calculatorService.power(operands);
  }

  @Get('power_by_two/:firstOperand')
  powerByTwo(@Param('firstOperand') firstOperand: string): number {
    const operand = SingleOperandDto.fromRouteParams(firstOperand);
    return this.calculatorService.powerByTwo(operand);
  }
}
