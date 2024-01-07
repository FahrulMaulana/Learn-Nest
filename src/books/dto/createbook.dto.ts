/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class createBooksdto {
   @IsNotEmpty()
   @IsString()
   @Type(()=> String)
    title: string;

    @IsNotEmpty()
    author: string;

    @IsNotEmpty()
    category: string;

}