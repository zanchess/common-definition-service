import { Test, TestingModule } from '@nestjs/testing';
import { UserWordService } from '../userWord.service';
import { getModelToken } from '@nestjs/mongoose';
import { UserWordController } from '../userWord.controller';

describe('UserWordsService', () => {
    let service: UserWordService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserWordController],
            providers: [
                UserWordService,
                {
                    provide: getModelToken('UserWord'), // Use the schema name passed to getModelToken()
                    useValue: {} // Add a mock model or any specific methods if needed
                }
            ]
        }).compile();

        service = module.get<UserWordService>(UserWordService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
