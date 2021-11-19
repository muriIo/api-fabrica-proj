import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Types } from "mongoose"



@Schema()
export class Video {

    @Prop()
    description: String;

    @Prop()
    link: String;

    @Prop()
    createdAt: Date;
}

export const VideoSchema = SchemaFactory.createForClass(Video);