import { Module } from '@nestjs/common';
import { JenisKelaminController } from './jenis_kelamin.controller';
import { JenisKelaminService } from './jenis_kelamin.service';

@Module({
  controllers: [JenisKelaminController],
  providers: [JenisKelaminService]
})
export class JenisKelaminModule {}
