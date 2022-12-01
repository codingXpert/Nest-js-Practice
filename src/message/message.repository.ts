import { Injectable } from '@nestjs/common';
import { readFile , writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository{

    async findOne(id:string){
       const content = await readFile('message.json' , 'utf8');  // produced result in string formate
       const messages = JSON.parse(content);  // parsing the stirng content into json object
       return messages[id];
    }

    async findAll(){
        const content = await readFile('message.json' , 'utf8');
        const messages = JSON.parse(content);
        return messages;
    }

    async create(content:string){
        const contents = await readFile('message.json' , 'utf8');
        const messages = JSON.parse(content);
        const id = Math.floor(Math.random()*999);
        messages[id] = {id , content:content}
        await writeFile('message.json' , JSON.stringify(messages));
    }
}