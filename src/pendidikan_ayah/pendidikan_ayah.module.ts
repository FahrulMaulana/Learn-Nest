import { Module } from '@nestjs/common';
import { PendidikanAyahController } from './pendidikan_ayah.controller';
import { PendidikanAyahService } from './pendidikan_ayah.service';

@Module({
  controllers: [PendidikanAyahController],
  providers: [PendidikanAyahService]
})
export class PendidikanAyahModule {}
