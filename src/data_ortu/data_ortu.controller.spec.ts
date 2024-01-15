import { Test, TestingModule } from '@nestjs/testing';
import { DataOrtuController } from './data_ortu.controller';

describe('DataOrtuController', () => {
  let controller: DataOrtuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataOrtuController],
    }).compile();

    controller = module.get<DataOrtuController>(DataOrtuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
