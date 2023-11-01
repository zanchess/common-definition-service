export class IWordDefinition {
    word: string;
    results: IWordDefinitionResults[];
    syllables: {
        count: number;
        list: string[];
    };
    pronunciation: {
        all: string;
    };
    frequency: number;
}

interface IWordDefinitionResults {
    definition: string;
    partOfSpeech: string;
    synonyms: string[];
    typeOf: string[];
    hasTypes: string[];
    derivation: string[];
    examples: string[];
}
