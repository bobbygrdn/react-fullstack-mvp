DROP TABLE IF EXISTS users;
-- DELETE IF EXISTS calendar;
-- DELETE IF EXISTS workout_plans;
-- DELETE IF EXISTS workout;
-- DELETE IF EXISTS exercise_list;
-- DELETE IF EXISTS exercises;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    height INT NOT NULL,
    weight INT NOT NULL,
    body_fat INT NOT NULL,
    bmi INT NOT NULL
);

