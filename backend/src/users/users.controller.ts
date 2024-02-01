import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './shared/user.service/user.service';
import { User } from './shared/user/user';

@Controller('api')
export class UsersController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    async getAll() : Promise<string>{
        return this.userService.getAll();
    }

    @Get('user/:userId')
    async getById(@Param('userId') id: number) : Promise<string>{
        return this.userService.getById(id);
    }

    @Get('user/:userId/avatar')
    async getAvatarById(@Param('userId') id: number) : Promise<String>{
        return this.userService.getAvatarById(id);
    }

    @Post('users')
    async create(@Body() user: User) : Promise<User>{
        return this.userService.create(user);
    }

    @Delete('user/:userId/avatar')
    async deleteAvatar(@Param('userId') id: number) : Promise<String>{
        return this.userService.deleteAvatar(id);
    }
}
