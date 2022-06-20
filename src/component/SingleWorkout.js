const SingleWorkout = (props) => {

    return (
        <div className="singleWorkout">
            <h2 className="singleWorkoutInfo">{props.elem.exercise_name}: {props.elem.sets} X {props.elem.reps_time} Rest Cycle: {props.elem.rest_cycle}</h2>
        </div>
    )
}

export default SingleWorkout