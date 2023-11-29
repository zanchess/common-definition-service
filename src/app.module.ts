import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WordDefinitionModule } from './wordDefinition/wordDefinition.module';
import { UserWordModule } from './userWord/userWord.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        UserModule,
        WordDefinitionModule,
        UserWordModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URI),
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
