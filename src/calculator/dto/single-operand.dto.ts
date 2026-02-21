import { BadRequestException } from '@nestjs/common';
import { plainToInstance, Type } from 'class-transformer';
import { IsNumber, validateSync } from 'class-validator';

export class SingleOperandDto {
  @Type(() => Number)
  @IsNumber({}, { message: 'Value must be a valid number.' })
  firstOperand!: number;

  constructor(firstOperand?: number) {
    if (firstOperand !== undefined) {
      this.firstOperand = firstOperand;
    }
  }

  static fromRouteParams(firstOperand: string): SingleOperandDto {
    const instance = plainToInstance(SingleOperandDto, {
      firstOperand,
    });

    const validationErrors = validateSync(instance);
    if (validationErrors.length > 0) {
      throw new BadRequestException('Value must be a valid number.');
    }

    return instance;
  }
}
