import { Test, TestingModule } from '@nestjs/testing';
import { PendidikanIbuController } from './pendidikan_ibu.controller';

describe('PendidikanIbuController', () => {
  let controller: PendidikanIbuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PendidikanIbuController],
    }).compile();

    controller = module.get<PendidikanIbuController>(PendidikanIbuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
