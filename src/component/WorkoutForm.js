import { useState } from "react"

const WorkoutForm = (props) => {

    const [name, setName] = useState();
    const [sets, setSets] = useState();
    const [reps, setReps] = useState();
    const [rest, setRest] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (

        <form onSubmit={e => { handleSubmit(e) }}>

        <input name='name' type='text' value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
        <input name='type' type='text' value={sets} placeholder="Type" onChange={e => setSets(e.target.value)} />
        <input name='freq' type='text' value={reps} placeholder="Frequency" onChange={e => setReps(e.target.value)} />
        <input name='freq' type='text' value={rest} placeholder="Frequency" onChange={e => setRest(e.target.value)} />
        <input className="button" type='submit' value='Update Plan' />
      
    </form>
    )
}

export default WorkoutForm