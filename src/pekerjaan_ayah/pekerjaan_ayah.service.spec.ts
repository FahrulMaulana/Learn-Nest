import { Test, TestingModule } from '@nestjs/testing';
import { PekerjaanAyahService } from './pekerjaan_ayah.service';

describe('PekerjaanAyahService', () => {
  let service: PekerjaanAyahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PekerjaanAyahService],
    }).compile();

    service = module.get<PekerjaanAyahService>(PekerjaanAyahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
