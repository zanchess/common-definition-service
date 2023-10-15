import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutharizationModule } from './autharization/autharization.module';
import { WordDefinitionModule } from './word-definition/word-definition.module';
import { StatisticModule } from './statistic/statistic.module';
import { MyWordsModule } from './my-words/my-words.module';

@Module({
    imports: [AutharizationModule, WordDefinitionModule, StatisticModule, MyWordsModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
