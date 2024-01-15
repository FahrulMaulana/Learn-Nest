/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PendidikanAyahService } from './pendidikan_ayah.service';

@Controller('pendidikan-ayah')
export class PendidikanAyahController {
    constructor(private penA: PendidikanAyahService){}

    @Get()
    async get(){
        return await this.penA.getall()
    }

    @Post()
    async create(@Body()Body){
        return await this.penA.create(Body)
    }
}
