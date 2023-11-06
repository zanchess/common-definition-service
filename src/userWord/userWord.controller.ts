import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserWordDTO } from './dto/userWord.dto';
import { UserWordService } from './userWord.service';

@Controller('userWords')
export class UserWordController {
    constructor(private readonly userWordService: UserWordService) {}
    @Get(':id')
    async getAllWordsForUser(@Param('id') userId: string): Promise<UserWordDTO[]> {
        return [];
    }

    @Post('saveWord')
    async saveWordForUser(@Body() userWord: UserWordDTO): Promise<UserWordDTO> {
        return this.userWordService.saveWordForUser({ ...userWord });
    }

    @Delete(':id')
    async deleteWordFromUserCollection(@Param('id') id: string): Promise<string> {
        return 'Word deleted';
    }

    @Put(':id')
    async updateWordInUserCollection(@Param('id') id: string, @Body() updatedUser: UserWordDTO): Promise<UserWordDTO> {
        return 'Word updated' as any;
    }
}
