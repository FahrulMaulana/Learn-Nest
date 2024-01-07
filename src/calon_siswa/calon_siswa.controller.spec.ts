import { Test, TestingModule } from '@nestjs/testing';
import { CalonSiswaController } from './calon_siswa.controller';

describe('CalonSiswaController', () => {
  let controller: CalonSiswaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalonSiswaController],
    }).compile();

    controller = module.get<CalonSiswaController>(CalonSiswaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
