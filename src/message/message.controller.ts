import { Controller , Get , Post , Body , Param} from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';                       

@Controller('message')
export class MessageController {
    @Get()
    ListMessage(){
    
    }
    
    @Post()
    createMessage(@Body() body:createMessageDto){
        console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id:string){
        console.log(id);
    }
}


