/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PendaftaranService {
    constructor(private pendaftaranService: PrismaService){}

    async findAll(){
        return await this.pendaftaranService.pendaftaran.findMany({
            include: {
                calon_siswa: {
                  include: {
                    jenis_kelamin: {
                      select: {
                        kelamin: true
                      }
                    }
                  }
                },
                data_ortu: {
                  include: {
                    pekerjaan_ayah: true,
                      pekerjaan_ibu: true,
                        pendidikan_ayah: true,
                          pendidikan_ibu: true
                  }
                }
              }
                })
            }
            

            async FindById(id: number) {
                return await this.pendaftaranService.pendaftaran.findUnique({
                  where: { id },
                  include: {
                    calon_siswa: {
                      include: {
                        jenis_kelamin: {
                          select: {
                            kelamin: true
                          }
                        }
                      }
                    },
                    data_ortu: {
                      include:{
                        pekerjaan_ayah: true,
                          pekerjaan_ibu: true,
                            pendidikan_ayah: true,
                              pendidikan_ibu: true
                      }
                    }
                  }
                });
              }
              

    async create(data: any){
        return await this.pendaftaranService.pendaftaran.create({
            data
        })
    }

    async update(id: number, data: any){
        return await this.pendaftaranService.pendaftaran.update({
            data,
            where: {id}
        })
    }
}
