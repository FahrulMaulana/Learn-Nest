import { Test, TestingModule } from '@nestjs/testing';
import { JenisKelaminController } from './jenis_kelamin.controller';

describe('JenisKelaminController', () => {
  let controller: JenisKelaminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JenisKelaminController],
    }).compile();

    controller = module.get<JenisKelaminController>(JenisKelaminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
