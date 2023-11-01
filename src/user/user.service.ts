import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(userData: CreateUserDTO) {
        // TODO: figure out with returned value type and fix if needed
        const newUser = new this.userModel({ ...userData });
        return newUser.save();
    }

    async getUserById(userId: string): Promise<User | null> {
        return this.userModel.findById(userId).exec();
    }
}
