DELETE IF EXISTS users;
-- DELETE IF EXISTS calendar;
-- DELETE IF EXISTS workout_plans;
-- DELETE IF EXISTS workout;
-- DELETE IF EXISTS exercise_list;
-- DELETE IF EXISTS exercises;

CREATE TABLE users (
    user_id SERIAL NOT NULL,
    username VARCHAR(20) NOT NULL,
    height TEXT NOT NULL,
    weight NUMBER NOT NULL,
    body_fat NUMBER NOT NULL,
    bmi NUMBER NOT NULL
);

