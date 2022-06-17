import React, { useEffect, useState } from 'react';
import Header from './component/Header'
import UserProfile from './component/UserProfile';
import Plan from './component/Plan';
import Workouts from './component/Workout';

const App = () => {
  const [users, setUsers] = useState([]);
  const [plans, setPlan] = useState([]);
  const [workouts, setWorkout] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/users')
    .then(response => response.json())
    .then(data => setUsers({data}))
  });

  useEffect(() => {
    fetch('http://localhost:4000/api/workout_plans')
    .then(response => response.json())
    .then(data => setPlan({data}))
  })

  useEffect(() => {
    fetch('http://localhost:4000/api/workout')
    .then(response => response.json())
    .then(data => setWorkout({data}))
  })

  return (
      <>
      <Header />
      {/* <UserProfile users={users} />
      <Plan plans={plans} /> 
      <Workouts workouts={workouts} /> */}
      </>
    )
  
}

export default App;
