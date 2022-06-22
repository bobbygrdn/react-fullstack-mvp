import { useState } from "react"
import DeleteWorkoutButton from "./DeleteWorkoutButton"
import UpdateWorkoutForm from './UpdateWorkoutForm'
import UpdateWorkoutButton from "./UpdateWorkoutButton"

const SingleWorkout = (props) => {

    const [update, showUpdate] = useState(false);
    const [button, updateButton] = useState(true);
    
    return (
        <div className="singleWorkout">
            <h2 className="singleWorkoutInfo">{props.elem.exercise_name}: {props.elem.sets} X {props.elem.reps_time} Rest Cycle: {props.elem.rest_cycle}</h2>
            <DeleteWorkoutButton props={props.elem.workout_id} />
            {update &&
                
                <UpdateWorkoutForm showUpdate={showUpdate} UpdateButton={updateButton} workout={props.elem.workout_id} />
                
            }
            {button &&
                
                <UpdateWorkoutButton showUpdate={showUpdate} UpdateButton={updateButton} />
                
            }
        </div>
    )
}

export default SingleWorkout