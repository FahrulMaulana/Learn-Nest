/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataOrtuService } from './data_ortu.service';

@Controller('data-ortu')
export class DataOrtuController {
    constructor(private dataOrtu: DataOrtuService){}

    @Get()
    async Getdata(){
        return await this.dataOrtu.Getall()
    }

    @Post()
    async createData(@Body()Body){
        return await this.dataOrtu.createData(Body)
    }
}
