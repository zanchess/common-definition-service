import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserWord, UserWordDocument } from './userWord.model';

@Injectable()
export class UserWordService {
    constructor(@InjectModel(UserWord.name) private readonly userModel: Model<UserWordDocument>) {}

    async saveWordForUser(userWord: UserWord) {
        // TODO: figure out with returned value type and fix if needed
        const newUserWord = new this.userModel({ ...userWord });
        return newUserWord.save();
    }
}
