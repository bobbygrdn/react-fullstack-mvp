import SingleWorkout from './SingleWorkout'
const Workouts = (props) => {
    return (
      props.workouts.data.map((elem) => {
        return <SingleWorkout elem={elem} key={elem.workout_id} /> 
        })
    )
}

export default Workouts