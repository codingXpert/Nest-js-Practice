import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./message.repository";

@Injectable()
export class MessageService{
      constructor(public messagerepo:MessageRepository){
       
    }

    async findOne(id:string){
        return this.messagerepo.findOne(id); 
    }

    async findAll(){
        return this.messagerepo.findAll();
    }

    create(content:string){
        return this.messagerepo.create(content);
    }
}
