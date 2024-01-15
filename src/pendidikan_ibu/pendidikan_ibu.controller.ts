/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PendidikanIbuService } from './pendidikan_ibu.service';

@Controller('pendidikan-ibu')
export class PendidikanIbuController {
    constructor(private PenI: PendidikanIbuService){}

    @Get()
    async get(){
        return await this.PenI.getall()
    }

    @Post()
    async create(@Body()Body){
        return await this.PenI.create(Body)
    }
}
