import { Controller, Param, Post, Get, Body } from '@nestjs/common';
import { WordDefinitionService } from './wordDefinition.service';
import { WordApiService } from '../commonServices/wordsApi.service';
import { IWordDefinition, IWordDefinitionsToSave, IWordDefinitionToSave } from './dto/wordDefinition.dto';

@Controller('wordDefinition')
export class WordDefinitionController {
    constructor(private readonly wordDefinitionService: WordDefinitionService, private wordsApiService: WordApiService) {}

    @Post('word/:word')
    // TODO: returned type should be fixed
    async saveWordDefinition(@Param() { word }: { word: string }): Promise<IWordDefinitionToSave> {
        const wordToSave = await this.wordsApiService.getWord(word);
        return await this.wordDefinitionService.saveWordDefinition(wordToSave);
    }

    @Post('saveWords')
    async saveWordDefinitions(@Body() wordsToSave: IWordDefinitionsToSave): Promise<any> {
        return await this.wordDefinitionService.saveWordDefinitions(wordsToSave);
    }

    @Get(':word')
    async getWord(@Param() { word }: { word: string }): Promise<IWordDefinition> {
        const wordToSave = await this.wordsApiService.getWord(word);
        return await this.wordDefinitionService.saveWordDefinition(wordToSave);
    }
}
