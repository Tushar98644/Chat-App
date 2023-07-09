import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        content: {
            type: String,
            required: true,
        },
        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat',
        },
    },
    {
        timestamps: true,
    }
);

const MessageModel = mongoose.model('Message', MessageSchema);
export default MessageModel;
