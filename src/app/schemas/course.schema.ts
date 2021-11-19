import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User } from "./user.schema";
import { Video } from "./video.schema";

@Schema()
export class Course {

    @Prop()
    name: String;

    @Prop()
    duration: Number;

    @Prop({ type: [Types.ObjectId], ref: Video.name })
    videos: Video[];

    @Prop({ type: [Types.ObjectId], ref: 'User' })
    users: User[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);

CourseSchema.set('timestamps', true);