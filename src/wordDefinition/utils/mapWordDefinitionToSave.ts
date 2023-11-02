import { IWordDefinition, IWordDefinitionToSave } from '../dto/wordDefinition.dto';

export const mapWordDefinitionToSave = (wordDefinition: IWordDefinition): IWordDefinitionToSave => {
    const { pronunciation } = wordDefinition;
    return {
        ...wordDefinition,
        ...(pronunciation && { pronunciation: typeof pronunciation === 'string' ? pronunciation : pronunciation.all })
    };
};
