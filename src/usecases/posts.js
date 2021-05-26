const Posts = require ('../models/posts')

function getAll () {
    return Posts.find ({})
}

function getById(id){
    return Posts.findById(id);
}

function publishPosts ({postTitle, tags, imgPost, contenrPost, createdDate, createdTime}) {
    return Post.create ({postTitle, tags, imgPost, contenrPost, createdDate, createdTime})
}

function deleteById (id) {
    return Post.findByIdAndDelete (id)
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