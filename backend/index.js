require('dotenv').config();
const api = require('./api.js');
const port = process.env.PORT || 4000;

api.listen(port, () => {
    console.log(`Diary.io API is listening on port: ${port}`);
})
