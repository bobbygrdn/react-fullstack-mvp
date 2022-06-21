import { useState } from 'react';

const PlanForm = (props) => {

    const [name, setName] = useState();
    const [type, setType] = useState();
    const [freq, setFreq] = useState();

    const handleSubmit = (e) => {
        props.updatePlan([name, type, freq])
        e.preventDefault();
    }

    return(

        <form onSubmit={e => { handleSubmit(e) }}>

            <input name='name' type='text' value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
            <input name='type' type='text' value={type} placeholder="Type" onChange={e => setType(e.target.value)} />
            <input name='freq' type='text' value={freq} placeholder="Frequency" onChange={e => setFreq(e.target.value)} />
            <input className="button" type='submit' value='Update Plan' />
          
        </form>
    )
}

export default PlanForm