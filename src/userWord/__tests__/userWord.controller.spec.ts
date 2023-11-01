import { Test, TestingModule } from '@nestjs/testing';
import { UserWordController } from '../userWord.controller';

describe('UserWordsController', () => {
    let controller: UserWordController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserWordController]
        }).compile();

        controller = module.get<UserWordController>(UserWordController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
