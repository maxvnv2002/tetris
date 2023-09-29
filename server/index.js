const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const PORT = config.get('serverPort');
//
// const User = require('./models/User')

const start = async () => {
    try {
       // await mongoose.connect(config.get('dbUrl'));

        app.listen(PORT, () => {
            console.log('Server started on port', PORT);
        });

    } catch (e) {
        console.log(e);
    }
}
start();

app.post('/title', (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send('Что-то произошло');
})