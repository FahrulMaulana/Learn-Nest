/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DataOrtuService {
    constructor(private data_ortu: PrismaService){}

    async Getall(){
        return await this.data_ortu.data_ortu.findMany({
            include:{
                pekerjaan_ayah: true, 
                pekerjaan_ibu: true,
                pendidikan_ayah: true,
                pendidikan_ibu: true
            }
        })
    }

    async createData(data: any){
        return await this.data_ortu.data_ortu.create({data})
    }
}
