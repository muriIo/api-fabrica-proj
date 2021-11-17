import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './app/course/course.module';
import { UserModule } from './app/user/user.module';
import { VideoModule } from './app/video/video.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_user:RbBiO8J1CPU8bJk0@treinela.39o4p.mongodb.net/bdtreinela?retryWrites=true&w=majority'),
    UserModule,
    CourseModule,
    VideoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
