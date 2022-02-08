require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.send("Hello world!");
})

const port = 3000;
app.listen(port);
console.log(`API is running on port ${port}`);