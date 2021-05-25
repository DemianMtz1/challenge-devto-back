const router = require('express').Router();
const repliesUseCases = require('../usecases/replies');

router.get('/', async (req, res) => {
    try {
        const replies = await repliesUseCases.getAll();
        res.status(200).json({
            success: true,
            message: 'all replies',
            data: {
                replies
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at getAll',
            error: error.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const newReply = req.body
        const reply = await repliesUseCases.create(newReply);
        res.status(200).json({
            success: true,
            message: 'Created reply successfuly',
            data: {
                reply
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at getAll',
            error: error.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        if(!id){
            res.status(400).json({
                success: false,
                message: 'Id does not exist',
            })
            return;
        }
        const deletedReply = await repliesUseCases.deleteById(id);
        res.status(200).json({
            success: true,
            message: 'Created reply successfuly',
            data: {
                reply: deletedReply
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at getAll',
            error: error.message
        })
    }
})

module.exports = router