import { BadRequestException } from '@nestjs/common';
import { CalculatorOperandsDto } from './calculator-operands.dto';

export class DivideOperandsDto extends CalculatorOperandsDto {
  static fromRouteParams(
    firstOperand: string,
    secondOperand: string,
  ): DivideOperandsDto {
    const operands = CalculatorOperandsDto.fromRouteParams(
      firstOperand,
      secondOperand,
    );

    if (operands.secondOperand === 0) {
      throw new BadRequestException('Cannot divide by zero.');
    }

    return new DivideOperandsDto(operands.firstOperand, operands.secondOperand);
  }
}
