import { Test, TestingModule } from '@nestjs/testing';
import { PendidikanAyahController } from './pendidikan_ayah.controller';

describe('PendidikanAyahController', () => {
  let controller: PendidikanAyahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PendidikanAyahController],
    }).compile();

    controller = module.get<PendidikanAyahController>(PendidikanAyahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
