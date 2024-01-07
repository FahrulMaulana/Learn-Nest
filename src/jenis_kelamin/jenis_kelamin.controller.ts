/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { JenisKelaminService } from './jenis_kelamin.service';

@Controller('jenis-kelamin')
export class JenisKelaminController {
    constructor(private JenisKelamin: JenisKelaminService){}

    @Get()
    async jenis_kelamin(){
        return await this.JenisKelamin.findAll()
    }

    @Post()
    async create(@Body() Body){
        return await this.JenisKelamin.createData(Body)
    }
}
