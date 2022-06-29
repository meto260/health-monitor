const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const nodemon = require('nodemon');
require('dotenv').config();

const app = express();
app.use(express.static('wwwroot'));
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Service is running on: http://localhost:${port}.`);
});

app.get('/', async (request, response)=>{
    response.sendFile(path.join(__dirname, '/views/index.html'));
});