const UserProfile = (props) => {
    return(
    <div className="profile">
        <h1 className="userData">{props.users.data[0].username}</h1>
        <h1 className="userInfo">Statistics: </h1>
        <h2 className="userStats">Height: {props.users.data[0].height}</h2>
        <h2 className="userStats"> Weight: {props.users.data[0].weight}</h2>
        <h2 className="userStats"> Body Fat %: {props.users.data[0].body_fat} </h2>
        <h2 className="userStats"> BMI: {props.users.data[0].bmi}</h2>
    </div>
    )
}

export default UserProfile