import SingleWorkout from './SingleWorkout'
const Workouts = (props) => {

  return (
      <div className='workouts'>
        <h1 className='workoutsInfo'>Exercises: </h1>
          {props.workouts.data.map((elem) => {
            return (        
            <SingleWorkout elem={elem} key={elem.workout_id} />
            )
          })}
      </div>
    )
}

export default Workouts