import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    cpf: String,
    cel: String,
    type: String
});
