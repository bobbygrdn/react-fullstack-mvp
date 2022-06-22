import React, { useEffect, useState } from 'react';
import Header from './component/Header'
import UserProfile from './component/UserProfile';
import Plan from './component/Plan';
import Workouts from './component/Workout';
import Footer from './component/Footer';

const App = () => {
  const [users, setUsers] = useState(null);
  const [plans, setPlan] = useState(null);
  const [workouts, setWorkout] = useState(null);
  const [motivate, setMotivate] = useState(null)


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

  useEffect(() => {
    fetch()
    .then(response => response.json)
    .then(data => setMotivate({data}))
  })

  if(users !== null && plans !== null && workouts !== null && motivate !== null) {
    return (
    
      <>
      <Header />
      <UserProfile users={users}  />
      <Plan plans={plans}  /> 
      <Workouts workouts={workouts} />
      <Footer motivate={motivate}/>
      </>
  
    )
  }
}

export default App;
