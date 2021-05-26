const Posts = require ('../models/posts')

function getAll () {
    return Posts.find ({})
}

function getById(id){
    return Posts.findById(id);
}

function publishPosts ({idUser, postTitle, tags, imgPost, contentPost, createdDate, createdTime}) {
    return Posts.create ({idUser, postTitle, tags, imgPost, contentPost, createdDate, createdTime})
}

function deleteById (id) {
    return Posts.findByIdAndDelete (id)
}

// function postUpdate (id, infoToUpdate) {
//     return Post.findByIdAndUpdate (id, infoToUpdate)
// } ¿Se deben actualizar los posts? 


module.exports = {
    getAll,
    getById,
    publishPosts,
    deleteById
}