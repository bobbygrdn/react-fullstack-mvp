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
        fetch(`http://localhost:4000/api/users/${props.user.user_id}`, fetchData)
        .then(() => {
            window.alert('Updated User Stats!')
        })
        setHeight('');
        setWeight('');
        setBodyFat('');
        setBmi('');
        props.showProfile(false);
        props.showUpdate(true);
    }
    return(

    <form onSubmit={e => { handleSubmit(e) }}>

            <input name='name' type='text' value={height} placeholder="Height" onChange={e => setHeight(e.target.value)} />
            <input name='type' type='text' value={weight} placeholder="Weight" onChange={e => setWeight(e.target.value)} />
            <input name='freq' type='text' value={bodyFat} placeholder="Body Fat" onChange={e => setBodyFat(e.target.value)} />
            <input name='freq' type='text' value={bmi} placeholder="BMI" onChange={e => setBmi(e.target.value)} />
            <input className="button" type='submit' value='Submit' />
          
        </form>

    )
}

export default UserProfileForm