import { BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { NotEquals, validateSync } from 'class-validator';
import { CalculatorOperandsDto } from './calculator-operands.dto';

export class DivideOperandsDto extends CalculatorOperandsDto {
  @NotEquals(0, { message: 'Cannot divide by zero.' })
  declare secondOperand: number;

  static fromRouteParams(
    firstOperand: string,
    secondOperand: string,
  ): DivideOperandsDto {
    const operands = plainToInstance(DivideOperandsDto, {
      firstOperand,
      secondOperand,
    });

    const validationErrors = validateSync(operands);
    if (validationErrors.length > 0) {
      throw new BadRequestException('Cannot divide by zero.');
    }

    return operands;
  }
}
