/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CalonSiswaService {
    constructor(private siswaService: PrismaService){}

    async findAll(){
        return await this.siswaService.calon_siswa.findMany({
            include: {
                jenis_kelamin: {
                    select: {
                        kelamin: true
                    }
                }
            }
        })
    }

    async findId(id: number){
        return await this.siswaService.calon_siswa.findUnique({
            where: {id},
            include: {
                jenis_kelamin: true
            }
        })
    }

    async createData(data: any){
        return await this.siswaService.calon_siswa.create({
            data
        })
    }

    async updateDate(id: number, data: any){
        return await this.siswaService.calon_siswa.update({
            data,
            where: {id}
        })
    }

    async deleteData(id: number){
        return await this.siswaService.calon_siswa.delete({
            where: {id}
        })
    }
}
