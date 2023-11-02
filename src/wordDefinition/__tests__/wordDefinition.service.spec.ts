import { Test, TestingModule } from '@nestjs/testing';
import { WordDefinitionService } from '../wordDefinition.service';
import { WordDefinitionController } from '../wordDefinition.controller';
import { getModelToken } from '@nestjs/mongoose';
import { WordApiService } from '../../commonServices/wordsApi.service';

describe('WordDefinitionService', () => {
    let service: WordDefinitionService;

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

        service = module.get<WordDefinitionService>(WordDefinitionService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
