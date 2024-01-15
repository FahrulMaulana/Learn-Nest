import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CalonSiswaModule } from './calon_siswa/calon_siswa.module';
import { JenisKelaminModule } from './jenis_kelamin/jenis_kelamin.module';
import { PendaftaranModule } from './pendaftaran/pendaftaran.module';
import { DataOrtuModule } from './data_ortu/data_ortu.module';
import { PekerjaanAyahModule } from './pekerjaan_ayah/pekerjaan_ayah.module';
import { PendidikanAyahModule } from './pendidikan_ayah/pendidikan_ayah.module';
import { PekerjaanIbuModule } from './pekerjaan_ibu/pekerjaan_ibu.module';
import { PendidikanIbuModule } from './pendidikan_ibu/pendidikan_ibu.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BooksModule, PrismaModule, UserModule, CalonSiswaModule, JenisKelaminModule, PendaftaranModule, DataOrtuModule, PekerjaanAyahModule, PendidikanAyahModule, PekerjaanIbuModule, PendidikanIbuModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
