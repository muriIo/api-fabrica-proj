import { Document } from 'mongoose';

export class Course extends Document {
    name: String;
    duration: Number;
}