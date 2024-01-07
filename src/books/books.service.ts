/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from "uuid";
import { createBooksdto } from './dto/createbook.dto';
import { updateBooksdto } from './dto/updatebook.dto';

@Injectable()
export class BooksService {
    private books: any[] = [];

    getAllBooks(): any[]{
        return this.books
    }

    getBooks(id:string){
        const bookId = this.findBookById(id)
        return this.books[bookId]
    }

    createBooks(createBooksdto: createBooksdto){
        const {title,author,category} = createBooksdto
        this.books.push({
            id:uuidv4(),
            title,
            author,
            category  
        })
        const updateSuccessful = true; // Adjust this based on your actual logic
        return { success: updateSuccessful }
    }

    updateBooks(id: string,updateBooksdto: updateBooksdto){
        const {title,author,category} = updateBooksdto
        const bookId = this.findBookById(id)
        this.books[bookId].title = title
        this.books[bookId].author = author
        this.books[bookId].category = category

        const updateSuccessful = true; // Adjust this based on your actual logic

        return { success: updateSuccessful }
    }

    findBookById(id:string){
            const bookId = this.books.findIndex((book)=> book.id === id) 
            if(bookId === -1){
            throw new NotFoundException(`Book with id ${id} is not found`)
          } return bookId
        }

    deleteBooks(id:string){
        const bookId = this.findBookById(id)
        this.books.splice(bookId, 1)
        const deleteSuccessful = true; // Adjust this based on your actual logic
        return { success: deleteSuccessful };
    }
}


