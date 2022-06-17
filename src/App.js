import React, { useEffect, useState } from 'react';
import GordonMedia from './img/Gordon Media.png';

function App() {
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
        <div className="header">
          <h1 className="title">Gordon Gym Trainer!</h1>
          <img src={GordonMedia} alt="none" className='icon' />
        </div>
      </>
  );
}

export default App;
