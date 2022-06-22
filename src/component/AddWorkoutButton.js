const AddWorkoutButton = (props) => {

    const handleClick = () => {
        props.showWorkout(true)
        props.addButton(false)
    }

    return(

        <button className="addButton" onClick={handleClick}>Add</button>
    )
}

export default AddWorkoutButton