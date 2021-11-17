import { Schema } from "mongoose";

export const VideoSchema = new Schema({
    description: String,
    link: String
});