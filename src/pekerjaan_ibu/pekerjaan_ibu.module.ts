import { Module } from '@nestjs/common';
import { PekerjaanIbuController } from './pekerjaan_ibu.controller';
import { PekerjaanIbuService } from './pekerjaan_ibu.service';

@Module({
  controllers: [PekerjaanIbuController],
  providers: [PekerjaanIbuService]
})
export class PekerjaanIbuModule {}
