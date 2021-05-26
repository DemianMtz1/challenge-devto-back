
const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')

function getAll () {
  return Users.find()
}

async function signUp ({ nickname, fullName, avatarUrl, description, work, location, joined}){

  const userFound = await Users.findOne({ nickname })

  if (userFound) {
    throw new Error('User already exist')
  }

  //const encriptedPassword = await bcrypt.hash(password)

  return Users.create({
  nickname, 
  fullName,
  avatarUrl,
  description,
  work,
  location,
  joined
})
}

function deleteById(id) {
  return Users.findByIdAndDelete(id)
}

function updateById(id, dataToUpdate){
  return Users.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
  getAll,
  signUp,
  deleteById,
  updateById
}

