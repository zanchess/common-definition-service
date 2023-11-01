import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordDefinitionController } from './wordDefinition.controller';
import { WordDefinitionService } from './wordDefinition.service';
import { WordDefinitionSchema, WordDefinition } from './wordDefinition.model';
import { WordApiService } from '../commonServices/wordsApi.service';

@Module({
    controllers: [WordDefinitionController],
    imports: [MongooseModule.forFeature([{ name: 'WordDefinition', schema: WordDefinitionSchema }])],
    providers: [WordDefinitionService, WordApiService]
})
export class WordDefinitionModule {}
