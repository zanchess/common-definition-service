import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';
import { User } from '../user/user.model';

export type UserWordDocument = HydratedDocument<UserWord>;

@Schema()
export class UserWord {
    @Prop({ type: MSchema.Types.ObjectId, ref: 'User' })
    user: MSchema.Types.ObjectId;

    @Prop({ required: true })
    word: string;

    @Prop({ required: true })
    translation: string;

    @Prop({ required: true })
    transcription: string;

    @Prop({ required: true })
    definition: string;
}

export const UserWordSchema = SchemaFactory.createForClass(UserWord);
