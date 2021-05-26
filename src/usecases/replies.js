const Reply = require('../models/replies');

function getAll() {
    return Reply.find({})
}

function create({
    contentReply,
    createdDate,
    createdTime,
    idUser,
    nickname,
    idPost}) {
    return Reply.create({
        contentReply,
        createdDate,
        createdTime,
        idUser,
        nickname,
        idPost,
    })
}

function deleteById(id) {
    return Reply.findByIdAndDelete(id)
}

function updateById(id, dataToChange) {
    return Reply.findByIdAndUpdate(id, dataToChange)
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}