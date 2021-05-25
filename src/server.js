const express = require('express')
const app = express();

const postsRouter = require ('./routers/posts'); //Se agrega el router de post
const repliesRouter = require('./routers/replies');
const reactionsRouter = require('./routers/reactions');
const usersRouter = require('./routers/users');

const cors = require('cors')
require('dotenv').config({ path: 'src/.env' })

app.use(express.json())
app.use(cors())

app.use ('/posts', postsRouter); //Se llama la ruta de posts para el router
app.use('/replies', repliesRouter);
app.use('/reactions', reactionsRouter)
app.use('/users', usersRouter)

app.get('/', (req,res)=> {
    res.json({
        error: null,
        message: 'Default root'
    })
})

module.exports = app