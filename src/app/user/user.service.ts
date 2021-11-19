import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

import { hashSync } from 'bcryptjs';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async getAll() {
        return await this.userModel.find({}).select("-password").populate('courses', null, 'Course').exec();
    }

    async getByEmail(email: String) {
        return await this.userModel.findOne({ email: email }).populate('courses', null, 'Course').exec();
    }

    async create(user: User) {
        const final: any = {
            name: user.name,
            email: user.email,
            password: hashSync(user.password),
            cpf: user.cpf,
            cel: user.cel,
            type: user.type,
            courses: user.courses
        };


        const createdUser = new this.userModel(final);
        return await createdUser.save();
    }

    async update(id: String, user: User) {
        const final: any = {
            name: user.name,
            email: user.email,
            password: hashSync(user.password),
            cpf: user.cpf,
            cel: user.cel,
            type: user.type,
            courses: user.courses
        };

        await this.userModel.findByIdAndUpdate({ _id: id }, final).exec();
        return this.getByEmail(final.email);
    }

    async delete(id: String) {
        return await this.userModel.findByIdAndDelete({ _id: id }).exec();
    }

}
