import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserWord, UserWordDocument } from './userWord.model';
import { UserWordDTO } from './dto/userWord.dto';

@Injectable()
export class UserWordService {
    constructor(@InjectModel(UserWord.name) private readonly userModel: Model<UserWordDocument>) {}

    async saveWordForUser(userWord: UserWord): Promise<UserWordDTO> {
        const newUserWord = new this.userModel({ ...userWord });
        return newUserWord.save();
    }
}
