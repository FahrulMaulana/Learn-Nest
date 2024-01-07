import { Test, TestingModule } from '@nestjs/testing';
import { CalonSiswaService } from './calon_siswa.service';

describe('CalonSiswaService', () => {
  let service: CalonSiswaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalonSiswaService],
    }).compile();

    service = module.get<CalonSiswaService>(CalonSiswaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
