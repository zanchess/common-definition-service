import { Body, Controller, Delete, Param, Post, Put, Get } from '@nestjs/common';
import { UserDTO, Login } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post('createUser')
    async createUser(@Body() UserDTO: UserDTO): Promise<UserDTO> {
        return this.userService.createUser({ ...UserDTO });
    }

    @Get(':id')
    async getUserById(@Param('id') userId: string): Promise<UserDTO> {
        return this.userService.getUserById(userId);
    }

    @Post('login')
    async login(@Body() loginData: Login): Promise<UserDTO> {
        return this.userService.login(loginData);
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
