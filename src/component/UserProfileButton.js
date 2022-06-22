const UserProfileButton = (props) => {
    
    const handleClick = () => {
        props.showUpdate(false)
        props.showProfile(true)
    } 

    return (

        <button className="planButton" onClick={handleClick}>Update</button>
    )
}

export default UserProfileButton