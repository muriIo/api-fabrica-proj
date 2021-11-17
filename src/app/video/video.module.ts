import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoSchema } from '../schemas/video.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Video',
      schema: VideoSchema
    }])
  ],
  providers: [VideoService],
  controllers: [VideoController]
})
export class VideoModule { }
