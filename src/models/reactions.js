const mongoose = require('mongoose');

// schema
const reactionsSchema = new mongoose.Schema({
    createdTime: {
        type: String,
        required: true,
        minLenght: 2,
    },
    idPost: {
        type: String,
        required: true,
        minLenght: 2,
    },
    idReply: {
        type: String,
        required: true,
        minLenght: 2,
    },
    idUser: {
        type: String,
        required: true,
        minLenght: 2,
    }
})

// models
const Reaction = mongoose.model('reactions', reactionsSchema);

module.exports = Reaction;
