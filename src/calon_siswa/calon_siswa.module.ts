import { Module } from '@nestjs/common';
import { CalonSiswaController } from './calon_siswa.controller';
import { CalonSiswaService } from './calon_siswa.service';

@Module({
  controllers: [CalonSiswaController],
  providers: [CalonSiswaService]
})
export class CalonSiswaModule {}
