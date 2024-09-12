// make the necessary imports here
import mongoose from 'mongoose'
// implement the below schema
const messageSchema = new mongoose.Schema({
    username: String,
    text: String,
    room: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export const messageModel = mongoose.model('Message', messageSchema);



