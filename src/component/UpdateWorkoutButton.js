const UpdateWorkoutButton = (props) => {
    
    const handleClick = () => {
        props.showUpdate(true)
        props.UpdateButton(false)
    }

    return(

        <button className="deleteButton" onClick={handleClick}>Update</button> 

    )

}

export default UpdateWorkoutButton