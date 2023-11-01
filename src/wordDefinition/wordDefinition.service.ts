import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WordsDefinitionDocument, WordDefinition } from './wordDefinition.model';
import { Model } from 'mongoose';
import { IWordDefinition } from './dto/wordDefinition.dto';

@Injectable()
export class WordDefinitionService {
    constructor(@InjectModel(WordDefinition.name) private wordDefinitionModel: Model<WordsDefinitionDocument>) {}

    async saveWordDefinition(wordDefinition: IWordDefinition): Promise<IWordDefinition> {
        const newWordsDefinition = new this.wordDefinitionModel(wordDefinition);
        return newWordsDefinition.save();
    }
}
