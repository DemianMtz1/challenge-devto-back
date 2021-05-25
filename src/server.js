const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: 'src/.env' })

app.use(express.json());
app.use(cors());


app.get('/', (req,res)=> {
    res.json({
        error: null,
        message: 'Default root'
    })
})

module.exports = app;