/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUsersDTO } from 'src/books/dto/createuser.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async users(){
        return await this.userService.findAll()
    }

    @Get()
    async findUser(@Param("id")id: number){
        return await this.userService.findById(id)
    }

    @Post()
    async createUser(@Body()payload: createUsersDTO){
        return await this.userService.createData(payload)
    }

    // @Post()
    // async createUser(@Body()Body){
    //     return await this.userService.createUser(Body)
    // }
}
