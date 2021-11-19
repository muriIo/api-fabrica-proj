import { Document } from 'mongoose';
import { Video } from '../schemas/video.schema';

export class Course extends Document {
    name: String;
    duration: Number;
    videos: Video[];
}