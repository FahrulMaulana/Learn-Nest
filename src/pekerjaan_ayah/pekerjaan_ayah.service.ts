/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PekerjaanAyahService {
    constructor(private pekerjaanayah: PrismaService){}

    async get(){
        return await this.pekerjaanayah.pekerjaan_ayah.findMany()
    }

    async cretae(data: any){
        return await this.pekerjaanayah.pekerjaan_ayah.create({data})
    }
}
