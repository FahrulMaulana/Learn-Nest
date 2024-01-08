/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CalonSiswaService } from './calon_siswa.service';

@Controller('calon-siswa')
export class CalonSiswaController {
    constructor(private calonsiswaSeivice: CalonSiswaService){}

    @Get()
    async calon(){
        return await this.calonsiswaSeivice.findAll()
    }

    @UsePipes(ValidationPipe)
    @Get("/:id")
    async calonId(@Param("id",ParseIntPipe)id: number){
        return await this.calonsiswaSeivice.findId(id)
    }

    @Post()
    async calon_siswa(@Body()Body){
        return await this.calonsiswaSeivice.createData(Body)
    }

    @UsePipes(ValidationPipe)
    @Put("/:id")
    async putcalon(@Param("id",ParseIntPipe)id: number, @Body()Body){
        return await this.calonsiswaSeivice.updateDate(id,Body)
    }

    @UsePipes(ValidationPipe)
    @Delete("/:id")
    async deletecalon(@Param("id",ParseIntPipe)id:number){
        return await this.calonsiswaSeivice.deleteData(id)
    }
}
