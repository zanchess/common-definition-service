import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';
import { UserDTO, Login } from './dto/user.dto';
import { comparePasswords, hashPassword } from './utils/passwordsHashing';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(userData: UserDTO): Promise<UserDTO> {
        const existingUserWithEmail = await this.userModel.findOne({ email: userData.email }).exec();
        if (existingUserWithEmail) {
            throw new Error('An account with this email address already exists.');
        }

        const existingUserWithAccount = await this.userModel.findOne({ account: userData.account }).exec();
        if (existingUserWithAccount) {
            throw new Error('This account already exists.');
        }

        const hashedPasswords = await hashPassword(userData.password);
        const userToCreate = { ...userData, password: hashedPasswords };

        const newUser = new this.userModel(userToCreate);
        return newUser.save();
    }

    async login({ email, password }: Login): Promise<UserDTO> {
        const existingUserWithEmail = await this.userModel.findOne({ email }).exec();
        if (!existingUserWithEmail) {
            throw new Error('An account with this email address does not exists.');
        }

        const isValidPassword = await comparePasswords(password, existingUserWithEmail.password);
        if (!isValidPassword) {
            throw new Error('Password is incorrect');
        }

        // TODO: remove password from response
        return existingUserWithEmail;
    }

    async getUserById(userId: string): Promise<UserDTO | null> {
        return this.userModel.findById(userId).exec();
    }
}
