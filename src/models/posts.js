const mongoose = require ('mongoose')

const postsSchema = new mongoose.Schema ({
    postTitle: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 150,

    },
    tags: {
        type: [String],
        minItems: 1,
        required: true
    },
    imgPost: {
        type: String,
        require: true,
        minLength: 1 // ¿Está bien el formato de img?
    },
    contentPost: {
        type: String,
        required: true,
        minLength: 1
    },
    createdDate: { // ¿Ok el formato para fecha?
        type: Date,
        required: true,
    },
    createdTime: { //¿Cómo es el formato para la hora?
        type: String,
        required: true,
    }
})

const model = mongoose.model ('posts', postsSchema)

module.exports =  model 