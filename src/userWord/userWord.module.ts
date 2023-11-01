import { Module } from '@nestjs/common';
import { UserWordController } from './userWord.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserWord, UserWordSchema } from './userWord.model';
import { UserWordService } from './userWord.service';

@Module({
    controllers: [UserWordController],
    imports: [MongooseModule.forFeature([{ name: UserWord.name, schema: UserWordSchema }])],
    providers: [UserWordService]
})
export class UserWordModule {}
