const express = require('express');
const cors = require('cors');

const api = express();

api.use(express.json());
api.use(cors());

api.get('/', (req, res) => {
    res.status(200).send({"title": "Diary.io", "message": "Welcome to Diary.io"})
})

module.exports = api;
