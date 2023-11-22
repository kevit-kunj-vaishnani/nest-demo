/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  

  constructor(public messagesService: MessagesService) {}   //this above statement will means this argument are automatically assign as property to class.

  @Post('/add')
  addmessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/all')
  getAllmessage() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  async getOnemessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if(!message){
      throw new NotFoundException(`message not found of id: ${id}`)
    }

    return message;
  }
}
