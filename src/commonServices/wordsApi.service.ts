import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IWordDefinition } from '../wordDefinition/dto/wordDefinition.dto';

@Injectable()
export class WordApiService {
    // TODO: create returned value
    async getWord(word): Promise<IWordDefinition> {
        console.log(word);
        const options = {
            method: 'GET',
            url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
            headers: {
                'X-RapidAPI-Key': '7bbf4231e3msh33a1d295e23feb8p1b1e59jsnbf276abd85c4',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request<IWordDefinition>(options);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data from the third-party service.');
        }
    }
}
