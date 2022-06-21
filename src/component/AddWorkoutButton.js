const AddWorkoutButton = (props) => {

    let data = {

    }

    let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        Headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
        })
    }

    const handleClick = () => {
        fetch("http://localhost:4000/api/workout", fetchData)
        .then(() => {
            window.alert("Workout Added")
        })
    }

    return(
        <button className="addButton" onClick={handleClick}>Add</button>
    )
}

export default AddWorkoutButton