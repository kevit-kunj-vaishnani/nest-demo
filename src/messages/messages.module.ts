/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository]    //this is nothing but = thingsThatCanBeUsedAsDependenciesForOtherClass: []. // but in nest js it is called providers.
})
export class MessagesModule {}
