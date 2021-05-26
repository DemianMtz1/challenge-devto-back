const mongoose = require('mongoose');


// Schema 
const replySchema = new mongoose.Schema({
    contentReply: {
        type: String,
        required: true,
        minLength: 2
    },
    createdDate: {
        type: String,
        required: true,
        minLength: 2
    },
    createdTime: {
        type: String,
        required: true,
        minLength: 2
    },
    idUser: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
        minLength: 2
    },
    idPost: {
        type: String,
        required: true,
        minLength: 2
    },
});

// Models 
const Reply = mongoose.model('replies', replySchema)

module.exports = Reply