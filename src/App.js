import React, { useEffect, useState } from 'react';
import Header from './component/Header'
import UserProfile from './component/UserProfile';

const App = () => {
  const [users, setUsers] = useState([]);
  const [plans, setPlan] = useState([]);
  const [workout, setWorkout] = useState([]);

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
      <UserProfile users={users} />
        
      </>
  );
}

export default App;
