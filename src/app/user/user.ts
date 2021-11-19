import { Document } from 'mongoose';
import { Course } from '../schemas/course.schema';

export class User extends Document {
    name: String;
    email: String;
    password: String;
    cpf: String;
    cel: String;
    type: String;
    courses: Course[];
}