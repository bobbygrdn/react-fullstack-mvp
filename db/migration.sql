-- DROP TABLE IF EXISTS users;
-- DELETE IF EXISTS calendar;
-- DELETE IF EXISTS workout_plans;
-- DELETE IF EXISTS workout;
-- DELETE IF EXISTS exercise_list;
-- DELETE IF EXISTS exercises;

-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(20) NOT NULL,
--     height INT NOT NULL,
--     weight INT NOT NULL,
--     body_fat INT NOT NULL,
--     bmi INT NOT NULL
-- );

-- CREATE TABLE workout_plans (
--     plan_id SERIAL PRIMARY KEY,
--     plan_name VARCHAR(20) NOT NULL,
--     type_of_plan VARCHAR(20) NOT NULL,
--     length_of_plan VARCHAR(20) NOT NULL,
--     user_id INTEGER REFERENCES users(user_id)
-- );

-- CREATE TABLE workout (
--     workout_id SERIAL PRIMARY KEY,
--     exercise_name VARCHAR(30) NOT NULL,
--     sets INT NOT NULL,
--     reps_time TEXT NOT NULL,
--     rest_cycle TEXT NOT NULL,
--     plan_id INTEGER REFERENCES workout_plans(plan_id)
);