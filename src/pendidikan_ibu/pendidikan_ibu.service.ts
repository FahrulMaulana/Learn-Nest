/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PendidikanIbuService {
    constructor(private pendidikanA: PrismaService){}

    async getall(){
        return await this.pendidikanA.pendidikan_ibu.findMany()
    }

    async create(data: any){
        return await this.pendidikanA.pendidikan_ibu.create({data})
    }
}
