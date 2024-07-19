const mongoose = require("mongoose");
const moment = require('moment');

const chatSchema = mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxLength: 50
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Adding a virtual to format the date
chatSchema.virtual('formattedDate').get(function() {
    return moment(this.date).format('YYYY-MM-DD HH:mm:ss');
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
