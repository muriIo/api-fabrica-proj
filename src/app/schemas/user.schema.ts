import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Types } from "mongoose";
import { Course } from "./course.schema";

@Schema()
export class User {
    @Prop()
    email: String;

    @Prop()
    password: String;

    @Prop()
    cpf: String;

    @Prop()
    cel: String;

    @Prop()
    type: String;

    @Prop({ type: [Types.ObjectId], ref: Course.name })
    courses: Course[];
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.set('timestamps', true);