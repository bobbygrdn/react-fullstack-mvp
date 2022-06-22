const express = require('express');
const { Pool } = require('pg');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const pool = new Pool({
    user: 'bobby',
    host: 'localhost',
    database: 'react_mvp_project',
    password: '',
    port: 5432,
})

app.use(express.json());
app.use(cors());

app.get('/api/users', async (req,res) => {
    try {
        const data = await pool.query('SELECT * FROM users;')
        res.send(data.rows);   
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/users/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const data = await pool.query('SELECT * FROM users;')
        res.send(data.rows[id]);   
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/api/users', async (req,res) => {
    const obj = req.body;
    try {
        const data = await pool.query(`INSERT INTO users (username, height, weight, body_fat, bmi) VALUES ('${obj.username}','${obj.height}', '${obj.weight}', '${obj.body_fat}', '${obj.bmi}');`)
        res.send('Created User')
    } catch (err) {
        console.error(err.message)
    }
})

app.patch('/api/users/:id', async (req,res) => {
    const id = req.params.id;
    const obj = req.obj;
    if(obj.username) {
        try {
            const data = await pool.query(`UPDATE users SET username = '${obj.username}' WHERE user_id = '${id}';`)
            res.send('Updated username');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.height) {
        try {
            const data = await pool.query(`UPDATE users SET height = '${obj.height}' WHERE user_id = '${id}';`)
            res.send('Updated height');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.weight) {
        try {
            const data = await pool.query(`UPDATE users SET weight = '${obj.weight}' WHERE user_id = '${id}';`)
            res.send('Updated weight');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.body_fat) {
        try {
            const data = await pool.query(`UPDATE users SET body_fat = '${obj.body_fat}' WHERE user_id = '${id}';`)
            res.send('Updated body_fat');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.bmi) {
        try {
            const data = await pool.query(`UPDATE users SET bmi = '${obj.bmi}' WHERE user_id = '${id}';`)
            res.send('Updated bmi');
        } catch (err) {
            console.error(err.message)
        }
    }
})

app.delete('/api/users/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const data = await pool.query(`DELETE FROM users WHERE user_id = '${id}';`)
        res.send('Deleted User')
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/api/workout_plans', async (req,res) => {
    try {
        const data = await pool.query('SELECT * FROM workout_plans;')
        res.send(data.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/api/workout_plans/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const data = await pool.query('SELECT * FROM workout_plans;')
        res.send(data.rows[id]);
    } catch (err) {
        console.error(err.message)
    }
})

app.post('/api/workout_plans', async (req,res) => {
    const obj = req.body;
    try {
        const data = await pool.query(`INSERT INTO workout_plans (plan_name, type_of_plan, length_of_plan) VALUES ('${obj.plan_name}','${obj.type_of_plan}', '${obj.length_of_plan}');`)
        res.send('Created Workout Plan')
    } catch (err) {
        console.error(err.message)
    }
})

app.patch('/api/workout_plans/:id', async (req,res) => {
    const id = req.params.id;
    const obj = req.body;

    if(obj.plan_name) {
        try {
            const data = await pool.query(`UPDATE workout_plans SET plan_name = '${obj.plan_name}' WHERE plan_id = '${id}';`)
            res.send('Updated plan name');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.type_of_plan) {
        try {
            const data = await pool.query(`UPDATE workout_plans SET type_of_plan = '${obj.type_of_plan}' WHERE plan_id = '${id}';`)
            res.send('Updated type of plan');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.length_of_plan) {
        try {
            const data = await pool.query(`UPDATE workout_plans SET length_of_plan = '${obj.length_of_plan}' WHERE plan_id = '${id}';`)
            res.send('Updated length of plan');
        } catch (err) {
            console.error(err.message)
        }
    }
})

app.delete('/api/workout_plans/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const data = await pool.query(`DELETE FROM workout_plans WHERE plan_id = '${id}';`)
        res.send('Deleted Workout Plan')
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

app.get('/api/workout/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const data = await pool.query('SELECT * FROM workout;')
        res.send(data.rows[id])
    } catch (err) {
        console.error(err.message)
    }
})

app.post('/api/workout', async (req,res) => {
    const obj = req.body
    try {
        const data = await pool.query(`INSERT INTO workout (exercise_name, sets, reps_time, rest_cycle) VALUES ('${obj.exercise_name}', '${obj.sets}', '${obj.reps_time}', '${obj.rest_cycle}');`)
        res.send("Added Workout!")
    } catch (err) {
        console.error(err.message)
    }
})

app.patch('/api/workout/:id', async (req,res) => {
    const id = req.params.id;
    const obj = req.body;
    
    if(obj.exercise_name) {
        try {
            const data = await pool.query(`UPDATE workout SET exercise_name = '${obj.exercise_name}' WHERE workout_id = '${id}';`)
            res.send('Updated exercise name');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.sets) {
        try {
            const data = await pool.query(`UPDATE workout SET sets = '${obj.sets}' WHERE workout_id = '${id}';`)
            res.send('Updated sets');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.reps_time) {
        try {
            const data = await pool.query(`UPDATE workout SET reps_time = '${obj.reps_time}' WHERE workout_id = '${id}';`)
            res.send('Updated reps/time');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.rest_cycle) {
        try {
            const data = await pool.query(`UPDATE workout SET rest_cycle = '${obj.rest_cycle}' WHERE workout_id = '${id}';`)
            res.send('Updated rest cycle');
        } catch (err) {
            console.error(err.message)
        }
    }
})

app.delete('/api/workout/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const data = await pool.query(`DELETE FROM workout WHERE workout_id = '${id}';`)
        res.send('Deleted workout')
    } catch (err) {
        console.error(err.message)
    }
})

app.use((req,res,next) => {
    res.status(500).send("Internal Server Error")
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})