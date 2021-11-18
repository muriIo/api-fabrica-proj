import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getAll(): Promise<User[]> {
        return await this.userService.getAll();
    }

    @Get(':email')
    @UseGuards(AuthGuard('jwt'))
    async getByEmail(@Param('email') email: String): Promise<User> {
        return await this.userService.getByEmail(email);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.userService.create(user);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    async update(@Body() user: User, @Param('id') id: String): Promise<User> {
        return await this.userService.update(id, user);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async delete(@Param('id') id: String) {
        return this.userService.delete(id);
    }
}
