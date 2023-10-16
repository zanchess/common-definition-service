export class WordDefinitionModel {
    word: string;
    results: IWordDefinition[];
    syllables: {
        count: number;
        list: string[];
    };
    pronunciation: {
        all: string;
    };
    frequency: number;
}

interface IWordDefinition {
    definition: string;
    partOfSpeech: string;
    synonyms: string[];
    typeOf: string[];
    hasTypes: string[];
    derivation: string[];
    examples: string[];
}
