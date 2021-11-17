import { Document } from "mongoose";

export class Video extends Document {
    description: String;
    link: String;
}