import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Video {

    @Prop()
    description: String;

    @Prop()
    link: String;
}

export const VideoSchema = SchemaFactory.createForClass(Video);

VideoSchema.set('timestamps', true);