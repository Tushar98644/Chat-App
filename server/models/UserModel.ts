import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
        profilePicture: {
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