/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PendaftaranService } from './pendaftaran.service';

@Controller('pendaftaran')
export class PendaftaranController {
    constructor(private pendaftaranservice: PendaftaranService){}

    @Get()
    async Getall(){
        return await this.pendaftaranservice.findAll()
    }

    @UsePipes(ValidationPipe)
    @Get("/:id")
    async GetId(@Param("id", ParseIntPipe) id:number){
        return await this.pendaftaranservice.FindById(id)
    }

    @Post()
    async create(@Body()Body){
        return await this.pendaftaranservice.create(Body)
    }

    @UsePipes(ValidationPipe)
    @Put("/:id")
    async update(@Param("id",ParseIntPipe)id:number,@Body()Body){
        return await this.pendaftaranservice.update(id,Body)
    }
}
