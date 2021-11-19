import { Document } from 'mongoose';
import { User } from '../schemas/user.schema';
import { Video } from '../schemas/video.schema';

export class Course extends Document {
    name: String;
    duration: Number;
    videos: Video[];
    users: User[];
}