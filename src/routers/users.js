
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
    console.log(request.body)
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
    if(!id){
        response.status(400).
        response.json({
            success: false,
            message: 'Id does not exist',
        })
        return;
    }
    const userDeleted = await users.deleteById(id);
    response.status(200).json({
        success: true,
        message: 'User deleted successfuly',
        data: {
            reply: userDeleted
        }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: 'Could not delete user',
      error: error.message
    })
  }
})

router.patch('/:id', async (request,response) => {
  try{
    const { id } = request.params
    if(!id){
      response.status(400)
      response.json({
          success: false,
          message: 'Id does not exist',
      })
      return
    }
    const userUpdated = await users.updateById(id, request.body)
    response.json({
      success: true,
      message: 'User updated',
      data: {
        users: userUpdated
      }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: 'Could not update user',
      error: error.message
    })
  }
})


module.exports = router
