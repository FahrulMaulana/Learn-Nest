/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { createBooksdto } from './dto/createbook.dto';
import { updateBooksdto } from './dto/updatebook.dto';


@Controller('api/books') 
export class BooksController {
   constructor(private booksService: BooksService){}

    @Get()
    getallbooks(){ 
        return this.booksService.getAllBooks()
    }

    @Get("/:id")
    getBooks(@Param("id")id:string){
        return this.booksService.getBooks(id)
    }

    @Post()
    createBooks(
        @Body()payload: createBooksdto,
    ){
        const updateResult = this.booksService.createBooks(payload)

        if (updateResult) {
            return {message: "update succesfullt"}
        }else{
            return {message: "Update Failed"}
        }
    }

    @Put("/:id")
    async updateBooks(
    @Param("id") id: string,
    @Body() payload: updateBooksdto
) {
    const updateResult = this.booksService.updateBooks(id, payload);

    if (updateResult.success) {
        return { message: "Update successful" };
    } else {
        return { message: "Update failed. Book not found or other error occurred." };
    }
}
    @Delete("/:id")
    deleteBooks(@Param("id")id:string){
        const deleteResult = this.booksService.deleteBooks(id)

        if (deleteResult.success) {
            return { message: "Delete Succesfully"}
        }else{
            return { message: "Delete Failed"}
        }
    }
    

}
