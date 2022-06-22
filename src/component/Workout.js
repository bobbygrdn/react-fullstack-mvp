import SingleWorkout from './SingleWorkout'
import AddWorkoutButton from './AddWorkoutButton'
import WorkoutForm from './WorkoutForm'
import { useState } from 'react'

const Workouts = (props) => {
  
  const [workout, showWorkout] = useState(false);
  const [button, addButton] = useState(true);

  return (
      <div className='workouts'>
        <h1 className='workoutsInfo'>Exercises: </h1>
        {workout &&
                
                <WorkoutForm showWorkout={showWorkout} addButton={addButton} />
                
        }
        {button &&
                
                <AddWorkoutButton showWorkout={showWorkout} addButton={addButton} />  
                
        }
        
          {props.workouts.data.map((elem) => {
            return (        
            <SingleWorkout elem={elem} key={elem.workout_id} />
            )
          })}
      </div>
    )
}

export default Workouts