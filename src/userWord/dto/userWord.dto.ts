import { Schema } from 'mongoose';

export class UserWordDTO {
    user: Schema.Types.ObjectId;
    word: string;
    translation: string;
    transcription: string;
    definition: string;
}
