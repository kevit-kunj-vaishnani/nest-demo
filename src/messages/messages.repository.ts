/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {

  // for get 1 message
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8'); // data in message.json is in string
    const messages = JSON.parse(contents); // to convert: into (object) <-- from (string)
    
    return messages[id]; // return 1 message
  }

  // for get all message
  async findAll() {
    const contents = await readFile('messages.json', 'utf8'); // data in message.json is in string
    const messages = JSON.parse(contents); // to convert: into (object) <-- from (string)
    
    return messages; // return all messages
  }

  // for create message
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    // console.log(contents);
    const messages = await JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content }; //messages[id] = { id:id, content:content }; // 12 : { id:12, content: "abc"}

    await writeFile('messages.json', JSON.stringify(messages)); // object data will be converted to string type data.
    return messages[id];
  }
}
