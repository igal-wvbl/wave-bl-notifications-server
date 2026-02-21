import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  add(firstOperand: string, secondOperand: string): number {
    const firstNumber = this.toNumber(firstOperand);
    const secondNumber = this.toNumber(secondOperand);

    return firstNumber + secondNumber;
  }

  subtract(firstOperand: string, secondOperand: string): number {
    const firstNumber = this.toNumber(firstOperand);
    const secondNumber = this.toNumber(secondOperand);

    return firstNumber - secondNumber;
  }

  multiply(firstOperand: string, secondOperand: string): number {
    const firstNumber = this.toNumber(firstOperand);
    const secondNumber = this.toNumber(secondOperand);

    return firstNumber * secondNumber;
  }

  private toNumber(value: string): number {
    const parsedValue = Number(value);

    if (Number.isNaN(parsedValue)) {
      throw new BadRequestException('Both values must be valid numbers.');
    }

    return parsedValue;
  }
}
