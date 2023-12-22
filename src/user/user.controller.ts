import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Login, UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { Roles } from '../roles/roles.decorator';
import { Role } from '../roles/roles.enum';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Roles(Role.User)
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
        return this.userService.findUser(loginData);
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
