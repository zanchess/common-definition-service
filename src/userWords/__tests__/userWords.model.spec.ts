import { UserWordsModel } from '../userWords.model';

describe('MyWordsModel', () => {
    it('should be defined', () => {
        expect(new UserWordsModel()).toBeDefined();
    });
});
