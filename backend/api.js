const express = require('express');
const cors = require('cors');
const entriesRoute = require('./routes/entriesRoute.js');
const usersRoute = require('./routes/usersRoute.js');
const api = express();

api.use(express.json());
api.use(cors());

api.get('/', (req, res) => {
    res.status(200).send({ "title": "Diary.io", "message": "Welcome to Diary.io" })
})

// routes
api.use('/users', usersRoute);
api.use('/entries', entriesRoute);


module.exports = api;
