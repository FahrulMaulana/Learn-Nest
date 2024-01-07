/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";


export class createUsersDTO{
    @IsNotEmpty()
    @Type(()=> String)
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    role: string;
}