import { BadRequestException } from '@nestjs/common';

export class CalculatorOperandsDto {
  constructor(
    public readonly firstOperand: number,
    public readonly secondOperand: number,
  ) {}

  static fromRouteParams(
    firstOperand: string,
    secondOperand: string,
  ): CalculatorOperandsDto {
    const firstNumber = Number(firstOperand);
    const secondNumber = Number(secondOperand);

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
      throw new BadRequestException('Both values must be valid numbers.');
    }

    return new CalculatorOperandsDto(firstNumber, secondNumber);
  }
}
