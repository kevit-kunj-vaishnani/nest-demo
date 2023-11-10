import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

const MESSAGE = [];

@Controller('messages')
export class MessagesController {
  @Post('/add')
  addmessage(@Body() body: CreateMessageDto) {
    MESSAGE.push(body);
    Logger.log(body);
    return body;
  }

  @Get('/all')
  getAllmessage() {
    return MESSAGE;
  }

  @Get('/:id')
  getOnemessage(@Param('id') id: number) {
    return MESSAGE.filter((i) => {
      return i.id == id;
    });
  }
}
