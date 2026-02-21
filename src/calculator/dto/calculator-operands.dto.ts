import { BadRequestException } from '@nestjs/common';
import { plainToInstance, Type } from 'class-transformer';
import { IsNumber, validateSync } from 'class-validator';

export class CalculatorOperandsDto {
  @Type(() => Number)
  @IsNumber({}, { message: 'Both values must be valid numbers.' })
  firstOperand!: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'Both values must be valid numbers.' })
  secondOperand!: number;

  constructor(firstOperand?: number, secondOperand?: number) {
    if (firstOperand !== undefined) {
      this.firstOperand = firstOperand;
    }

    if (secondOperand !== undefined) {
      this.secondOperand = secondOperand;
    }
  }

  static fromRouteParams(
    firstOperand: string,
    secondOperand: string,
  ): CalculatorOperandsDto {
    const instance = plainToInstance(CalculatorOperandsDto, {
      firstOperand,
      secondOperand,
    });

    const validationErrors = validateSync(instance);
    if (validationErrors.length > 0) {
      throw new BadRequestException('Both values must be valid numbers.');
    }

    return instance;
  }
}
