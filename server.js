require("dotenv").config();
const express = require('express');
const app = express();
const db = require('./db/conn')

app.get('/api/users', async (req,res) => {
    try {
        const data = await db.query('SELECT * FROM users;')
        res.send(data.rows);   
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
})