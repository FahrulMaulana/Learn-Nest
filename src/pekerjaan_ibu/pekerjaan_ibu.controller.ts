/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PekerjaanIbuService } from './pekerjaan_ibu.service';

@Controller('pekerjaan-ibu')
export class PekerjaanIbuController {
    constructor(private pekerjaanibu: PekerjaanIbuService){}

    @Get()
    async get(){
        return await this.pekerjaanibu.getall()
    }

    @Post()
    async create(@Body()Body){
        return await this.pekerjaanibu.create(Body)
    }
}
