import { Module } from '@nestjs/common';
import { UserWordsController } from './userWords.controller';

@Module({
    controllers: [UserWordsController]
})
export class UserWordsModule {}
