
const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')

function getAll () {
  return Users.find()
}

async function signUp ({ nickname, fullName, avatarUrl, description, work, location, joined, password }){

  const userFound = await Users.findOne({ nickname })

  if (userFound) {
    throw new Error('User already exist')
  }

  const encriptedPassword = await bcrypt.hash(password)

  return Users.create({
  nickname, 
  fullName,
  avatarUrl,
  description,
  work,
  location,
  joined, 
  password: encriptedPassword
})
}

module.exports = {
  getAll,
  signUp
}

