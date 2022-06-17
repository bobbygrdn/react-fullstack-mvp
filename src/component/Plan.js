import spartan from './img/spartan.jpg'
const Plan = (props) => {
    return (
        <div className="plan">
            <h1 className="userInfo">Current Plan Info: </h1>
            <div className="workoutCard">
                <h1 className="planInfo">{props.plans.data[0].plan_name}</h1>
                <h2 className="planStatistics">{props.plans.data[0].type_of_plan}</h2>
                <h2 className="planStatistics">{props.plans.data[0].length_of_plan}</h2>
                <img src={spartan} alt='none' />
            </div>
        </div>
    )
}

export default Plan