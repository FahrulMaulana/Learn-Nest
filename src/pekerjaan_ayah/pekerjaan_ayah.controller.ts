/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PekerjaanAyahService } from './pekerjaan_ayah.service';

@Controller('pekerjaan-ayah')
export class PekerjaanAyahController {
    constructor(private pekerjaanayah:PekerjaanAyahService){}

    @Get()
    async getall(){
        return await this.pekerjaanayah.get()
    }

    @Post()
    async ceate(@Body()Body){
        return await this.pekerjaanayah.cretae(Body)
    }
}
