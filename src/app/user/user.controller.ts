import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.userService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: String): Promise<User> {
        return await this.userService.getById(id);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.userService.create(user);
    }

    @Put(':id')
    async update(@Body() user: User, @Param('id') id: String): Promise<User> {
        return await this.userService.update(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id: String) {
        return this.userService.delete(id);
    }
}
