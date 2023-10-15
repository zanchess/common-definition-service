export class WordDefinitionModel {
    word: string;
    results: WordDefinitionList[];
    syllables: {
        count: number;
        list: string[];
    };
    pronunciation: {
        all: string;
    };
    frequency: number;
}

export class WordDefinitionList {
    definition: string;
    partOfSpeech: string;
    synonyms: string[];
    typeOf: string[];
    hasTypes: string[];
    derivation: string[];
    examples: string[];
}
