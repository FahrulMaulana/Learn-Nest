import { Test, TestingModule } from '@nestjs/testing';
import { PekerjaanIbuController } from './pekerjaan_ibu.controller';

describe('PekerjaanIbuController', () => {
  let controller: PekerjaanIbuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PekerjaanIbuController],
    }).compile();

    controller = module.get<PekerjaanIbuController>(PekerjaanIbuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
