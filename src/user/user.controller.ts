import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CreateUserDTO, LoginDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
    @Post('createUser')
    async createUser(@Body() createUserDto: CreateUserDTO): Promise<string> {
        return 'User created';
    }

    @Post('login')
    async login(@Body() loginDto: LoginDTO): Promise<string> {
        return 'Login';
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<string> {
        return 'User deleted';
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updatedUser: any): Promise<string> {
        return 'User updated';
    }
}
