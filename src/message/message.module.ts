import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.services';
import { MessageRepository } from './message.repository';

@Module({
  controllers: [MessageController],
  providers:[MessageService , MessageRepository]   //thingsThatCanBeUsedAsDependenciesForOtherClasses
})
export class MessageModule {}
