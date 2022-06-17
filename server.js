const express = require('express');
const { Pool } = require('pg');
const app = express();

const PORT = process.env.PORT || 3000;

const pool = new Pool({
    user: 'bobby',
    host: 'localhost',
    database: 'react_mvp_project',
    password: '',
    port: 5432,
})

app.get('/api/users', async (req,res) => {
    try {
        const data = await pool.query('SELECT * FROM users;')
        res.send(data.rows);   
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/workout_plans', async (req,res) => {
    try {
        const data = await pool.query('SELECT * FROM workout_plans;')
        res.send(data.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/api/workout', async (req,res) => {
    try {
        const data = await pool.query('SELECT * FROM workout;')
        res.send(data.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})