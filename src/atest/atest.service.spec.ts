import { Test, TestingModule } from '@nestjs/testing';
import { AtestService } from './atest.service';

describe('AtestService', () => {
  let service: AtestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtestService],
    }).compile();

    service = module.get<AtestService>(AtestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
