import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Video } from './video';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) { }

    @Get()
    async getAll(): Promise<Video[]> {
        return await this.videoService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: String): Promise<Video> {
        return await this.videoService.getById(id);
    }

    @Post()
    async create(@Body() video: Video): Promise<Video> {
        return await this.videoService.create(video);
    }

    @Put(':id')
    async update(@Body() video: Video, @Param('id') id: String): Promise<Video> {
        return await this.videoService.update(id, video);
    }

    @Delete(':id')
    async delete(@Param('id') id: String) {
        return this.videoService.delete(id);
    }
}
