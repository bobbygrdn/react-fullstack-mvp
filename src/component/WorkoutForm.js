import { useState } from "react"

const WorkoutForm = (props) => {

    const [name, setName] = useState([])
    const [sets, setSets] = useState([]);
    const [reps, setReps] = useState([]);
    const [rest, setRest] = useState([]);

    let data = {
        exercise_name: name,
        sets: parseInt(sets),
        reps_time: reps,
        rest_cycle: rest
    }

    let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        Headers: new Headers({
            'Content-Type': 'application/json',
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("http://localhost:4000/api/workout", fetchData)
            .then(() => {
            window.alert("Workout Added")
            })
            .catch(err => {
                console.error(err);
            })
       setName([]);
       setSets([]);
       setReps([]);
       setRest([]);
       props.showWorkout(false)
       props.addButton(true)
    }

    return (

        <form onSubmit={handleSubmit}>

            <input name='name' type='text' value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input name='sets' type='text' value={sets} placeholder="Sets" onChange={(e) => setSets(e.target.value)} />
            <input name='reps' type='text' value={reps} placeholder="Reps" onChange={(e)=> setReps(e.target.value)} />
            <input name='rest' type='text' value={rest} placeholder="Rest Cycle" onChange={(e) => setRest(e.target.value)} />
            <input className="button" type='submit' value='Submit' />
      
    </form>
    )
}

export default WorkoutForm