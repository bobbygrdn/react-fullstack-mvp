const DeleteWorkoutButton = (props) => {
   
    let data = {
        workout_id: `${props.props}`
    }
    
    let fetchData = {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
        })
    }
    const handleClick = () => {
        console.log(fetchData)
        fetch(`http://localhost:4000/api/workout/${data.workout_id}`, fetchData)
        .then(() => {
            window.alert('Workout Dropped')
        })
    }

    return (
        <button className="deleteButton" onClick={handleClick}>Delete</button>
    )
}

export default DeleteWorkoutButton