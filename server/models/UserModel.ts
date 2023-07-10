import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 3,
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
        },
    },
    { 
        timestamps: true,
    }
);

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;