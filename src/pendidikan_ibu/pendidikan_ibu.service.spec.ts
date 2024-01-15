import { Test, TestingModule } from '@nestjs/testing';
import { PendidikanIbuService } from './pendidikan_ibu.service';

describe('PendidikanIbuService', () => {
  let service: PendidikanIbuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PendidikanIbuService],
    }).compile();

    service = module.get<PendidikanIbuService>(PendidikanIbuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
