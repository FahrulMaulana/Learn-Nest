import { Test, TestingModule } from '@nestjs/testing';
import { JenisKelaminService } from './jenis_kelamin.service';

describe('JenisKelaminService', () => {
  let service: JenisKelaminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JenisKelaminService],
    }).compile();

    service = module.get<JenisKelaminService>(JenisKelaminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
