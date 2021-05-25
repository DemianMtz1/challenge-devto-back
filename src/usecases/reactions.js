const Reaction = require('../models/reactions');

function getAll() {
    return Reaction.find({});
}

function create({
    createdTime,
    idPost,
    idReply,
    idUser }) {
    return Reaction.create({
        createdTime,
        idPost,
        idReply,
        idUser
    });
}

function deleteById(id) {
    return Reaction.findByIdAndDelete(id);
}

function updateById(id, dataToUpdate) {
    return Reaction.findByIdAndUpdate(id, dataToUpdate);
}
module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}