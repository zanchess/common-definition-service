import { Controller, Param, Post } from '@nestjs/common';
import { WordDefinitionService } from './wordDefinition.service';
import { WordApiService } from '../commonServices/wordsApi.service';
import { IWordDefinition } from './dto/wordDefinition.dto';

@Controller('wordDefinition')
export class WordDefinitionController {
    constructor(private readonly wordDefinitionService: WordDefinitionService, private wordsApiService: WordApiService) {}

    @Post(':word')
    // TODO: returned type should be fixed
    async saveWordDefinition(@Param() { word }: { word: string }): Promise<IWordDefinition> {
        const wordToSave = await this.wordsApiService.getWord(word);
        return await this.wordDefinitionService.saveWordDefinition(wordToSave);
    }
}
