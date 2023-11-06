import { Body, Controller, Delete, Param, Post, Put, Get } from '@nestjs/common';
import { CreateUserDTO, LoginDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post('createUser')
    async createUser(@Body() createUserDto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.userService.createUser({ ...createUserDto });
    }

    @Get(':id')
    async getUserById(@Param('id') userId: string): Promise<CreateUserDTO> {
        return this.userService.getUserById(userId);
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
