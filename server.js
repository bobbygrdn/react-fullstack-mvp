const express = require('express');
const { Pool } = require('pg');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/users', async (req,res) => {
    try {
        const data = await Pool.query('SELECT * FROM users;')
        res.send(data.rows);   
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})