const dotenv = require('dotenv').config();
// const db = require('./src/configs/database');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static(__dirname + './resources'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
// route(app);

const server = require('http').Server(app);

const port = process.env.PORT || 7070;
const host = '0.0.0.0';

server.listen(port, host, () => {
    console.log(`User server is running in port ${port}`);
});