import { Test, TestingModule } from '@nestjs/testing';
import { DataOrtuService } from './data_ortu.service';

describe('DataOrtuService', () => {
  let service: DataOrtuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataOrtuService],
    }).compile();

    service = module.get<DataOrtuService>(DataOrtuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
