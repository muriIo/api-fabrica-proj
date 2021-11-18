import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Course } from './course';
import { CourseService } from './course.service';

@Controller('course')
@UseGuards(AuthGuard('jwt'))
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @Get()
    async getAll(): Promise<Course[]> {
        return await this.courseService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: String): Promise<Course> {
        return await this.courseService.getById(id);
    }

    @Post()
    async create(@Body() course: Course): Promise<Course> {
        return await this.courseService.create(course);
    }

    @Put(':id')
    async update(@Body() course: Course, @Param('id') id: String): Promise<Course> {
        return await this.courseService.update(id, course);
    }

    @Delete(':id')
    async delete(@Param('id') id: String) {
        return this.courseService.delete(id);
    }
}
