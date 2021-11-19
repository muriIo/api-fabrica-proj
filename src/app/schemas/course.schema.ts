import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Video } from "./video.schema";

@Schema()
export class Course {

    @Prop()
    name: String;

    @Prop()
    duration: Number;

    @Prop()
    createdAt: Date;

    @Prop({ type: [Types.ObjectId], ref: Video.name })
    videos: Video[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);