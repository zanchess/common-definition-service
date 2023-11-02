import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WordsDefinitionDocument, WordDefinition } from './wordDefinition.model';
import { Model } from 'mongoose';
import { IWordDefinition, IWordDefinitionsToSave, IWordDefinitionToSave } from './dto/wordDefinition.dto';
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

    // TODO: put returned type instead of any type
    async saveWordDefinitions(wordDefinition: IWordDefinitionsToSave): Promise<any> {
        const { words } = wordDefinition;
        const results = [];

        // TODO: Refactor it without reduce method
        await Promise.allSettled(
            words.map(async (word) => {
                try {
                    const existingRecord = await this.wordDefinitionModel.findOne({ word });
                    if (existingRecord) {
                        results.push({
                            ok: true,
                            isNewDefinition: false,
                            word
                        });
                        return;
                    }

                    const wordDefinitionToSave = await this.wordApiService.getWord(word);
                    await this.saveWordDefinition(wordDefinitionToSave);
                    results.push({
                        ok: true,
                        isNewDefinition: true,
                        word
                    });
                } catch (error) {
                    results.push({
                        ok: false,
                        word,
                        error: `${error}` // TODO: create custom errors
                    });
                }
            })
        );

        const wordsDefinitionResponse = results.reduce(
            (response, requestResult) => {
                if (requestResult.ok && requestResult.isNewDefinition) {
                    response.savedWordsAmount++;
                }
                if (requestResult.ok && !requestResult.isNewDefinition) {
                    response.existingWordsAmount++;
                    response.existingWords.push(requestResult.word);
                }
                if (!requestResult.ok) {
                    response.notSavedWordsAmount++;
                    response.notSavedWords.push({ word: requestResult.word, reason: requestResult.error });
                }

                return response;
            },
            {
                savedWordsAmount: 0,
                existingWordsAmount: 0,
                notSavedWordsAmount: 0,
                existingWords: [],
                notSavedWords: []
            }
        );

        return wordsDefinitionResponse;
    }
}
