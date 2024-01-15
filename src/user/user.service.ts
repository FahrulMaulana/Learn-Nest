/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { createUsersDTO } from 'src/books/dto/createuser.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private dbService: PrismaService, private auth: AuthService){}

    async findAll(){
        return await this.dbService.user.findMany();
    }

    async createData(createUsersDTO: createUsersDTO){
        const defaulRole = "1"

        const {email,name,username,password} = createUsersDTO
        const emailRegister = await this.dbService.user.findUnique({
            where : {
                email
            }
        })

        if (emailRegister) {
            throw new ConflictException('email sudah terdaftar')
        }

        const hash= await bcrypt.hash(password, 10)
        await this.dbService.user.createMany({
            data:{
            email,
            name,
            id_role : defaulRole,
            username,
            password: hash
    }})
        const updateSuccessful = true; // Adjust this based on your actual logic
        return { success: updateSuccessful }
    }

    async login(email:string, password:string){
        return await this.auth.login(email,password)
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