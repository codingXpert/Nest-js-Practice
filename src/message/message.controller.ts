import { Controller , Get , Post , Body , Param , NotFoundException} from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';    
import { MessageService } from './message.services';                   

@Controller('message')
export class MessageController {
        constructor(public messageService:MessageService){}
    @Get()
    ListMessage(){
     this.messageService.findAll();
    }
    
    @Post()
    createMessage(@Body() body:createMessageDto){
        return this.messageService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id:string){
       const message = await this.messageService.findOne(id);

     if(!message){
        throw new NotFoundException('message not found')
     }
     return message;
    }
}


