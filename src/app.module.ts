import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WordDefinitionModule } from './wordDefinition/wordDefinition.module';
import { UserWordsModule } from './userWords/userWords.module';

@Module({
    imports: [UserModule, WordDefinitionModule, UserWordsModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
