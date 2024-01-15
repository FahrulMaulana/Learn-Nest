import { Module } from '@nestjs/common';
import { DataOrtuController } from './data_ortu.controller';
import { DataOrtuService } from './data_ortu.service';

@Module({
  controllers: [DataOrtuController],
  providers: [DataOrtuService]
})
export class DataOrtuModule {}
