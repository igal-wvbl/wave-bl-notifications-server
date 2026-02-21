import { Test, TestingModule } from '@nestjs/testing';
import { GreeterController } from './greeter.controller';
import { GreeterService } from './greeter.service';

describe('GreeterController', () => {
  let controller: GreeterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreeterController],
      providers: [GreeterService],
    }).compile();

    controller = module.get<GreeterController>(GreeterController);
  });

  it('should return greeting for English', () => {
    expect(controller.greet('english')).toBe('Hello!');
  });
});
