import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CalonSiswaModule } from './calon_siswa/calon_siswa.module';
import { JenisKelaminModule } from './jenis_kelamin/jenis_kelamin.module';
import { PendaftaranModule } from './pendaftaran/pendaftaran.module';

@Module({
  imports: [BooksModule, PrismaModule, UserModule, CalonSiswaModule, JenisKelaminModule, PendaftaranModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
