import { useState } from "react"
import UserProfileForm from "./UserProfileForm"
import UserProfileButton from "./UserProfileButton"

const UserProfile = (props) => {

    const [showUpdate, setUpdateButton] = useState(true)
    const [showProfile, setShowProfile] = useState(false);

    return(
    <div className="profile">
        <h1 className="userData">{props.users.data[0].username}</h1>
        <h1 className="userInfo">Statistics: </h1>
        <h2 className="userStats">Height: {props.users.data[0].height}</h2>
        <h2 className="userStats"> Weight: {props.users.data[0].weight}</h2>
        <h2 className="userStats"> Body Fat %: {props.users.data[0].body_fat} </h2>
        <h2 className="userStats"> BMI: {props.users.data[0].bmi}</h2>
        {showProfile &&
                
                <UserProfileForm showUpdate={setUpdateButton} showProfile={setShowProfile} user={props.users.data[0]} />
                
            }
            {showUpdate &&
                
                <UserProfileButton showUpdate={setUpdateButton} showProfile={setShowProfile} />
                
            }
        
    </div>
    )
}

export default UserProfile