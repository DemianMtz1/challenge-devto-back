const express = require ('express')
const posts = require ('../usecases/posts')
const router = express.Router ()

router.get ('/', async (request, response)=> {
    try {
        const allPosts = await posts.getAll()

        response.json ({
            success: true,
            message: 'All posts',
            data: {
                koders: allPosts
            }
        })
    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error at getting all posts',
            error: error.message
        })
    }
})

router.post ('/', async (request, response) => {
    try {
        const postCreated = await posts.publishPosts (request.body)

        response.json ({
            success: true,
            message: 'Post created successfuly',
            data: {
                koders: postCreated
            }
        })
    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error Could not publish a new post',
            error: error.message
        })
    }

})

router.delete ('/:id', async  (request, response) => {
    try {
        const { id } = request.params
        const postDeleted = await posts.deleteById (id)

        response.json ({
            success: true,
            message: 'Post deleted successfuly',
            data: {
                koders: postDeleted
            }
        })

    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error, could not delete element',
            error: error.message
        })
    }
})

module.exports = router 