import { Module } from '@nestjs/common';
import { PendidikanIbuController } from './pendidikan_ibu.controller';
import { PendidikanIbuService } from './pendidikan_ibu.service';

@Module({
  controllers: [PendidikanIbuController],
  providers: [PendidikanIbuService]
})
export class PendidikanIbuModule {}
