import { useState } from "react";

const UserProfileForm = (props) => {
    
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bodyFat, setBodyFat] =useState('');
    const [bmi, setBmi] = useState('');

    let data = {
        height: height,
        weight: weight,
        body_fat: bodyFat,
        bmi: bmi
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
        fetch(`http://localhost:4000/api/workout_plans/${props.user_id}`, fetchData)
        .then(() => {
            window.alert('Changed Workout Plan!')
        })
        setHeight('');
        setWeight('');
        setBodyFat('');
        setBmi('');
        props.showProfile(true);
        props.showUpdate(false);
    }

    <form onSubmit={e => { handleSubmit(e) }}>

            <input name='name' type='text' value={height} placeholder="Name" onChange={e => setHeight(e.target.value)} />
            <input name='type' type='text' value={weight} placeholder="Type" onChange={e => setWeight(e.target.value)} />
            <input name='freq' type='text' value={bodyFat} placeholder="Frequency" onChange={e => setBodyFat(e.target.value)} />
            <input name='freq' type='text' value={bmi} placeholder="Frequency" onChange={e => setBmi(e.target.value)} />
            <input className="button" type='submit' value='Submit' />
          
        </form>

}

export default UserProfileForm