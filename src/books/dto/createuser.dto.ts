/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";


export class createUsersDTO{
    @IsNotEmpty()
    @IsEmail()
    @Type(()=> String)
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string
}