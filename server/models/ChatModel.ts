import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['private', 'group'],
        default: 'private',
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    isGroupChat: {
        type: Boolean,
        default: false,
    },
    latestmessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

},
    {
        timestamps: true,
    }

);

const ChatModel = mongoose.model('Chat', ChatSchema);
export default ChatModel;  