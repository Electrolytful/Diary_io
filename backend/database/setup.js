require('dotenv').config();
const db = require('./connect.js');
const fs = require('fs');

const sql = fs.readFileSync("./database/setup.sql").toString();

db.query(sql)
    .then(data => {
        db.end();
        console.log("Database setup complete!");
    })
    .catch(err => console.log(err));
