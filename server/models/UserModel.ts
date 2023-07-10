import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilepic: {
            type: String,
            default: "",
            required: false,
        },
    },
    { 
        timestamps: true,
    }
);

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;