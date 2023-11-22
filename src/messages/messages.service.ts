/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  
    // public messagesRepo: MessagesRepository;   
    // constructor() 
    // {
    //     this.messagesRepo = new MessagesRepository();
    // }

    constructor(public messagesRepo: MessagesRepository){}      

    findOne(id: string) {
        return this.messagesRepo.findOne(id)
    }

    findAll() {
        return this.messagesRepo.findAll();  
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}


/*
    
    public messagesRepo: MessagesRepository;  
    constructor(){
        this.messagesRepo = new MessagesRepository();
    }

    NOTE -> INSTEAD OF WRITING ABOVE SENTENCES WE CAN SIMPLY WRITE BELOW ONE

    constructor(public messagesRepo: MessagesRepository){}  //this above statement will means this argument are automatically assign as property to class.   
     

*/