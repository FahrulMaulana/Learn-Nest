import { Test, TestingModule } from '@nestjs/testing';
import { PekerjaanIbuService } from './pekerjaan_ibu.service';

describe('PekerjaanIbuService', () => {
  let service: PekerjaanIbuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PekerjaanIbuService],
    }).compile();

    service = module.get<PekerjaanIbuService>(PekerjaanIbuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
