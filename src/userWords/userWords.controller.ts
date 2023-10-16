import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserWordDTO } from './dto/userWord.dto';

@Controller('userWords')
export class UserWordsController {
    @Get(':id')
    async getAllWordsForUser(@Param('id') userId: string): Promise<any> {
        return [];
    }

    @Post('saveWord')
    async saveWordInUserCollection(@Body() UserWordDTO: UserWordDTO): Promise<string> {
        return 'Word for user saved';
    }

    @Delete(':id')
    async deleteWordFromUserCollection(@Param('id') id: string): Promise<string> {
        return 'Word deleted';
    }

    @Put(':id')
    async updateWordInUserCollection(@Param('id') id: string, @Body() updatedUser: UserWordDTO): Promise<string> {
        return 'Word updated';
    }
}
