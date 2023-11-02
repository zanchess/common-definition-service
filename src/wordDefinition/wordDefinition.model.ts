import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WordsDefinitionDocument = HydratedDocument<WordDefinition>;

@Schema({ _id: false })
export class Result {
    @Prop()
    definition: string;

    @Prop()
    partOfSpeech: string;

    @Prop([String])
    synonyms: string[];

    @Prop([String])
    typeOf: string[];

    @Prop([String])
    hasTypes: string[];

    @Prop([String])
    examples: string[];

    @Prop([String])
    cause: string[];

    @Prop([String])
    antonyms: string[];

    @Prop([String])
    verbGroup: string[];

    @Prop([String])
    derivation: string[];

    @Prop([String])
    inCategory: string[];

    @Prop([String])
    hasInstances: string[];
}

@Schema({ _id: false })
export class Syllables {
    @Prop()
    count: number;

    @Prop([String])
    list: string[];
}

@Schema({ versionKey: false })
export class WordDefinition {
    @Prop()
    word: string;

    @Prop([Result])
    results: Result[];

    @Prop({ type: Syllables })
    syllables: Syllables;

    @Prop()
    pronunciation: string;

    @Prop()
    frequency: number;
}

export const WordDefinitionSchema = SchemaFactory.createForClass(WordDefinition);
