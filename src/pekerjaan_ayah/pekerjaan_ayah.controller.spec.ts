import { Test, TestingModule } from '@nestjs/testing';
import { PekerjaanAyahController } from './pekerjaan_ayah.controller';

describe('PekerjaanAyahController', () => {
  let controller: PekerjaanAyahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PekerjaanAyahController],
    }).compile();

    controller = module.get<PekerjaanAyahController>(PekerjaanAyahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
