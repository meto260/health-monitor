const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(express.static('wwwroot'));

const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Service is running on: http://localhost:${port}.`);
});

const { Index } = require("./controllers/home.js");

app.get('/', Index);