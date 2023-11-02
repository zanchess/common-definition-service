import { Test, TestingModule } from '@nestjs/testing';
import { WordDefinitionController } from '../wordDefinition.controller';
import { getModelToken } from '@nestjs/mongoose';
import { WordDefinitionService } from '../wordDefinition.service';
import { WordApiService } from '../../commonServices/wordsApi.service';

describe('WordDefinitionController', () => {
    let controller: WordDefinitionController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [WordDefinitionController],
            providers: [
                WordDefinitionService,
                WordApiService,
                {
                    provide: getModelToken('WordDefinition'), // Use the schema name passed to getModelToken()
                    useValue: {} // Add a mock model or any specific methods if needed
                }
            ]
        }).compile();

        controller = module.get<WordDefinitionController>(WordDefinitionController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
