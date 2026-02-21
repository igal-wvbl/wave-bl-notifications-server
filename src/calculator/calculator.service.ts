import { Injectable } from '@nestjs/common';
import { CalculatorOperandsDto } from './dto/calculator-operands.dto';
import { DivideOperandsDto } from './dto/divide-operands.dto';

@Injectable()
export class CalculatorService {
  add(operands: CalculatorOperandsDto): number {
    return operands.firstOperand + operands.secondOperand;
  }

  subtract(operands: CalculatorOperandsDto): number {
    return operands.firstOperand - operands.secondOperand;
  }

  multiply(operands: CalculatorOperandsDto): number {
    return operands.firstOperand * operands.secondOperand;
  }

  divide(operands: DivideOperandsDto): number {
    return operands.firstOperand / operands.secondOperand;
  }

  power(operands: CalculatorOperandsDto): number {
    return operands.firstOperand ** operands.secondOperand;
  }
}
