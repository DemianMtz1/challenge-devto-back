
const express = require('express')
const users = require('../usecases/users')

const router = express.Router()

router.get('/', async (request,response) => {
  try{
    const allUsers = await users.getAll()
    response.json({
      success:true,
      message: 'All users',
      data: {
        users: allUsers
      }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: 'Could not get users',
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try{
    const newUser = await users.signUp(request.body)
    response.json({
      success:true,
      message: 'New user registered',
      data:{
        user:newUser
      }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: 'Could not post users',
      error: error.message
    })
  }
})

router.delete('/:id', async (request,response) => {
  try{
    const { id } = request.params
    const userDeleted = await users.deleteById(id)
    response.json({
      success:true,
      message: 'User has been deleted succesfyly',
      data: {
        user: userDeleted
      }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: 'Could not delete user',
      error: error.message
    })
    console.log(error)
  }
})


module.exports = router
