/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JenisKelaminService {
    constructor(private dbService: PrismaService) {}

    async findAll(){
        return await this.dbService.jenis_kelamin.findMany()
    }

    async createData(data: any){
        return await this.dbService.jenis_kelamin.create({
            data
        })
    }

}
