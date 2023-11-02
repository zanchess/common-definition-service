export interface IWordDefinitionsToSave {
    words: string[];
}

export interface IPronunciationAll {
    all: string;
}

export type IWordPronunciation = IPronunciationAll | string;

export interface IWordDefinitionResults {
    definition: string;
    partOfSpeech: string;
    synonyms: string[];
    typeOf: string[];
    hasTypes: string[];
    derivation: string[];
    examples: string[];
}

export interface IWordDefinition {
    word: string;
    results: IWordDefinitionResults[];
    syllables: {
        count: number;
        list: string[];
    };
    pronunciation: IWordPronunciation;
    frequency: number;
}

export interface IWordDefinitionToSave extends Omit<IWordDefinition, 'pronunciation'> {
    pronunciation: string;
}
