import { useState } from 'react';

const PlanForm = (props) => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [freq, setFreq] = useState('');

    let data = {
        plan_name: name,
        type_of_plan: type,
        length_of_plan: freq
    }

    let fetchData = {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: new Headers ({
            'Content-Type': 'application/json',
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/api/workout_plans/${props.plan.plan_id}`, fetchData)
        .then(() => {
            window.alert('Changed Workout Plan!')
        })
        setName('');
        setType('');
        setFreq('');
        props.setUpdateButton(true);
        props.setShowPlan(false);
    }

    return(

        <form onSubmit={e => { handleSubmit(e) }}>

            <input name='name' type='text' value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
            <input name='type' type='text' value={type} placeholder="Type" onChange={e => setType(e.target.value)} />
            <input name='freq' type='text' value={freq} placeholder="Frequency" onChange={e => setFreq(e.target.value)} />
            <input className="button" type='submit' value='Submit' />
          
        </form>
    )
}

export default PlanForm