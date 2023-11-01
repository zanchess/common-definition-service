import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WordsDefinitionDocument = HydratedDocument<WordDefinition>;

@Schema()
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

@Schema()
export class Syllables {
    @Prop()
    count: number;

    @Prop([String])
    list: string[];
}

@Schema()
export class Pronunciation {
    @Prop()
    all: string;
}

@Schema()
export class WordDefinition {
    @Prop()
    word: string;

    @Prop([Result])
    results: Result[];

    @Prop({ type: Syllables })
    syllables: Syllables;

    @Prop({ type: Pronunciation })
    pronunciation: Pronunciation;

    @Prop()
    frequency: number;
}

export const WordDefinitionSchema = SchemaFactory.createForClass(WordDefinition);
