const UserProfile = (props) => {
    return(
    <div className="profile">
        <h1 className="userInfo">User Info: </h1>
        <h2 className="userData">{props.users.data[0].username}</h2>
        <h1 className="userInfo">User Statistics: </h1>
        <h2 className="userData">Height: {props.users.data[0].height} Weight: {props.users.data[0].weight} Body Fat %: {props.users.data[0].body_fat} BMI: {props.users.data[0].bmi}</h2>
    </div>
    )
}

export default UserProfile