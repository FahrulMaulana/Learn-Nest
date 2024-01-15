/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { env } from 'process';
import { createUsersDTO } from 'src/books/dto/createuser.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor ( private prisma : PrismaService){}

    async register(Register: createUsersDTO){
        const defaulrole = "1"
        const {email, password, name, username} = Register
        const emailRegister = await this.prisma.user.findUnique({
            where : {
                email
            }
        })

        if (emailRegister) {
            throw new ConflictException('email sudah terdaftar')
        }

       
        const hash = await bcrypt.hash(password, 10)
        const regis = await this.prisma.user.create({
            data: {
                email,
                password : hash,
                name,
                username,
                id_role: defaulrole
            }
        })
        return regis
    }


    async login (email: string, password : string){
        const user = await this.prisma.user.findUnique({
            where: {email}
        })

        if (!user || !user.password || !(await bcrypt.compare(password, user.password))) {
            throw new  UnauthorizedException('invalid')
        }

        const token = this.generateToken(user.id)
        return token
    }
    private generateToken(userId:number):string{
        const payload = {sub : userId}
        return jwt.sign(payload, env.SECRET_KEY as string, {
            expiresIn: '1h'
        })
    }
}
