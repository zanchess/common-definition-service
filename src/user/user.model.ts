import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';
import { UserWord } from '../userWord/userWord.model';

export type UserDocument = HydratedDocument<User>;

@Schema({ versionKey: false })
export class User {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    account: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    male: string;

    @Prop({ type: MSchema.Types.ObjectId, ref: UserWord.name })
    words: UserWord;
}

export const UserSchema = SchemaFactory.createForClass(User);
