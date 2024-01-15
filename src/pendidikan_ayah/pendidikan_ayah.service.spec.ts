import { Test, TestingModule } from '@nestjs/testing';
import { PendidikanAyahService } from './pendidikan_ayah.service';

describe('PendidikanAyahService', () => {
  let service: PendidikanAyahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PendidikanAyahService],
    }).compile();

    service = module.get<PendidikanAyahService>(PendidikanAyahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
