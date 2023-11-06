import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WordsDefinitionDocument, WordDefinition } from './wordDefinition.model';
import { Model } from 'mongoose';
import { IWordDefinition, IWordDefinitionsToSave, IWordDefinitionToSave, WordDefinitionsResponse } from './dto/wordDefinition.dto';
import { WordApiService } from '../commonServices/wordsApi.service';
import { mapWordDefinitionToSave } from './utils/mapWordDefinitionToSave';

@Injectable()
export class WordDefinitionService {
    constructor(
        @InjectModel(WordDefinition.name) private wordDefinitionModel: Model<WordsDefinitionDocument>,
        private wordApiService: WordApiService
    ) {}

    async saveWordDefinition(wordDefinition: IWordDefinition): Promise<IWordDefinitionToSave> {
        const wordsDefinitionToSave = new this.wordDefinitionModel(mapWordDefinitionToSave(wordDefinition));
        return wordsDefinitionToSave.save();
    }

    async saveWordDefinitions(wordDefinition: IWordDefinitionsToSave): Promise<WordDefinitionsResponse> {
        const { words } = wordDefinition;
        const wordsDefinitionResponse = {
            savedWordsAmount: 0,
            existingWordsAmount: 0,
            notSavedWordsAmount: 0,
            existingWords: [],
            notSavedWords: []
        };

        await Promise.allSettled(
            words.map(async (word) => {
                try {
                    const existingRecord = await this.wordDefinitionModel.findOne({ word });
                    if (existingRecord) {
                        wordsDefinitionResponse.savedWordsAmount++;
                        wordsDefinitionResponse.existingWords.push(word);
                        return;
                    }

                    const wordDefinitionToSave = await this.wordApiService.getWord(word);
                    await this.saveWordDefinition(wordDefinitionToSave);
                    wordsDefinitionResponse.savedWordsAmount++;
                } catch (error) {
                    wordsDefinitionResponse.notSavedWordsAmount++;
                    wordsDefinitionResponse.notSavedWords.push({ word, reason: `${error}` });
                }
            })
        );

        return wordsDefinitionResponse;
    }
}
