/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUsersDTO } from 'src/books/dto/createuser.dto';
import { loginDTO } from 'src/books/dto/login.dto';
import { UserService } from './user.service';

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

    @Post('/login')
    async login(@Body()Body: loginDTO){
        const token =  await this.userService.login(Body.email,Body.password)
        return {token}
    }

    // @Post()
    // async createUser(@Body()Body){
    //     return await this.userService.createUser(Body)
    // }
}
