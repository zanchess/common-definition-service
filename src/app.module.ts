import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WordDefinitionModule } from './word-definition/word-definition.module';
import { StatisticModule } from './statistic/statistic.module';
import { MyWordsModule } from './my-words/my-words.module';

@Module({
    imports: [UserModule, WordDefinitionModule, StatisticModule, MyWordsModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
