const UserProfileButton = (props) => {
    
    const handleClick = () => {
        props.showUpdate(false)
        props.showProfile(true)
    } 

    return (

        <button className="profileButton" onClick={handleClick}>Update</button>
    )
}

export default UserProfileButton