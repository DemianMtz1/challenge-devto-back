const express = require('express');

const postsRouter = require ('./routers/posts'); //Se agrega el router de post

const app = express();
const cors = require('cors');
require('dotenv').config({ path: 'src/.env' })

app.use(express.json());
app.use(cors());

app.use ('/posts', postsRouter) //Se llama la ruta de posts para el router


app.get('/', (req,res)=> {
    res.json({
        error: null,
        message: 'Default root'
    })
})

module.exports = app;