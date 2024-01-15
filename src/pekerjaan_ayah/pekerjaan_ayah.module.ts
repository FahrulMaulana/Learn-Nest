import { Module } from '@nestjs/common';
import { PekerjaanAyahController } from './pekerjaan_ayah.controller';
import { PekerjaanAyahService } from './pekerjaan_ayah.service';

@Module({
  controllers: [PekerjaanAyahController],
  providers: [PekerjaanAyahService]
})
export class PekerjaanAyahModule {}
