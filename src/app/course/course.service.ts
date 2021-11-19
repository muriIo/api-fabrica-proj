import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './course';

@Injectable()
export class CourseService {
    constructor(@InjectModel('Course') private readonly courseModel: Model<Course>) { }

    async getAll() {
        return await this.courseModel.find().populate('videos', null, 'Video').exec();
    }

    async getById(id: String) {
        return await this.courseModel.findById(id).populate('videos', null, 'Video').exec();
    }

    async create(course: Course) {
        const createdUser = new this.courseModel(course);
        return await createdUser.save();
    }

    async update(id: String, course: Course) {
        await this.courseModel.findByIdAndUpdate({ _id: id }, course).exec();
        return this.getById(id);
    }

    async delete(id: String) {
        return await this.courseModel.findByIdAndDelete({ _id: id }).exec();
    }
}
