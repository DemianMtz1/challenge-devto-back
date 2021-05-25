const router = require('express').Router();
const reactionsUseCases = require('../usecases/reactions');


router.get('/', async (req,res)=> {
    try {
        const reactions = await reactionsUseCases.getAll();
        res.status(200).json({
            success: true,
            message: 'All replies',
            data: {
                reactions
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at getAll method',
            error: error.message
        });
    }
})

router.post('/', async (req,res)=> {
    try {
        const newReaction = req.body;
        const reactions = await reactionsUseCases.create(newReaction);
        res.status(200).json({
            success: true,
            message: 'Created reply',
            data: {
                reactions
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at create method',
            error: error.message
        })
    }
})

router.delete('/:id', async (req,res)=> {
    try {
        const id = req.params.id;
        if(!id){
            res.status(400).json({
                success: false,
                message: 'Id does not exist',
            })
            return;
        }
        const reactions = await reactionsUseCases.deleteById(id);
        res.status(200).json({
            success: true,
            message: 'Deleted reply',
            data: {
                reactions
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at getAll method',
            error: error.message
        })
    }
})

module.exports = router;