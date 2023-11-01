import { Test, TestingModule } from '@nestjs/testing';
import { UserWordController } from '../userWord.controller';
import { getModelToken } from '@nestjs/mongoose';
import { UserWordService } from '../userWord.service';

describe('UserWordsController', () => {
    let controller: UserWordController;

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

        controller = module.get<UserWordController>(UserWordController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
