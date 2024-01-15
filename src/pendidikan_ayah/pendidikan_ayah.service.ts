/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PendidikanAyahService {
    constructor(private cakil: PrismaService){}

    async getall(){
        return await this.cakil.pendidikan_ayah.findMany()
    }

    async create(data: any){
        return await this.cakil.pendidikan_ayah.create({data})
    }
}
