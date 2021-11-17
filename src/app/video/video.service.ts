import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video } from './video';

@Injectable()
export class VideoService {
    constructor(@InjectModel('Video') private readonly videoModel: Model<Video>) { }

    async getAll() {
        return await this.videoModel.find().exec();
    }

    async getById(id: String) {
        return await this.videoModel.findById(id).exec();
    }

    async create(video: Video) {
        const createdUser = new this.videoModel(video);
        return await createdUser.save();
    }

    async update(id: String, video: Video) {
        await this.videoModel.findByIdAndUpdate({ _id: id }, video).exec();
        return this.getById(id);
    }

    async delete(id: String) {
        return await this.videoModel.findByIdAndDelete({ _id: id }).exec();
    }
}
