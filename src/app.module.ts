import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WordDefinitionModule } from './wordDefinition/wordDefinition.module';
import { UserWordsModule } from './userWords/userWords.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        UserModule,
        WordDefinitionModule,
        UserWordsModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URI)
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
