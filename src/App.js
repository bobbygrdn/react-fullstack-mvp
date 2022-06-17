import React, { useEffect, useState } from 'react';
import Header from './Header'

const App = () => {
  const [users, setUsers] = useState(null);
  const [plans, setPlan] = useState(null);
  const [workout, setWorkout] = useState(null);

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
        
      </>
  );
}

export default App;
