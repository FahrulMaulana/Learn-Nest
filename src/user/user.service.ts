/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { createUsersDTO } from 'src/books/dto/createuser.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private dbService: PrismaService){}

    async findAll(){
        return await this.dbService.user.findMany();
    }

    async createData(createUsersDTO: createUsersDTO){
        const {email,name,role} = createUsersDTO
         await this.dbService.user.createMany({
            data:{
            email,
            name,
            role
    }})
        const updateSuccessful = true; // Adjust this based on your actual logic
        return { success: updateSuccessful }
    }

    // async createUser(data: any){
    //     return await this.dbService.user.create({
    //         data
    //     })
    // }

    async findById(id: number) {
        return await this.dbService.user.findUnique({
            where: {
                id
            }
        });
    }
}