export class WordDefinitionModel {
    word: string;
    results: IWordDefinitionList[];
    syllables: {
        count: number;
        list: string[];
    };
    pronunciation: {
        all: string;
    };
    frequency: number;
}

interface IWordDefinitionList {
    definition: string;
    partOfSpeech: string;
    synonyms: string[];
    typeOf: string[];
    hasTypes: string[];
    derivation: string[];
    examples: string[];
}
