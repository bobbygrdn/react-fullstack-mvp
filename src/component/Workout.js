import SingleWorkout from './SingleWorkout'
import AddWorkoutButton from './AddWorkoutButton'
import WorkoutForm from './WorkoutForm'

const Workouts = (props) => {

  return (
      <div className='workouts'>
        <h1 className='workoutsInfo'>Exercises: </h1>
        <AddWorkoutButton />
        <WorkoutForm />
          {props.workouts.data.map((elem) => {
            return (        
            <SingleWorkout elem={elem} key={elem.workout_id} />
            )
          })}
      </div>
    )
}

export default Workouts