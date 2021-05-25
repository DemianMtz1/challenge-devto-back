
const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  nickname:{
    type: String,
    required:true,
    minLength: 3,
    maxLength: 16
 // match: /^[a-z0-9_-]{3,15}$ ['Must have between 3 to 16 characters, could have - or _']/
  },
  fullName: {
    type: String,
    required: true,
    minLength:2,
    maxLength:100
  },
  avatarUrl: {
    type: String,
    required: true,
    minLength:3
  },
  description:{
    type: String,
    minLength:2,
    maxLength: 1000,
  },
  work: {
    type: String,
    minLength:2,
    maxLength: 1000
  },
  location: {
    type: String,
    minLength:2,
    maxLength: 1000
  },
  joined: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
  }
})

const model = mongoose.model('users', usersSchema)

module.exports = model