/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PekerjaanIbuService {
    constructor(private pekerjaanibu: PrismaService){}

    async getall(){
        return await this.pekerjaanibu.pekerjaan_ibu.findMany()
    }

    async create(data: any){
        return await this.pekerjaanibu.pekerjaan_ibu.create({data})
    }
}
