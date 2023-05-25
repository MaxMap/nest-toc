import { Test, TestingModule } from '@nestjs/testing';
import { AtestController } from './atest.controller';

describe('AtestController', () => {
  let controller: AtestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtestController],
    }).compile();

    controller = module.get<AtestController>(AtestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
