// import spartan from './img/spartan.jpg'
const Plan = (props) => {
    return (
        <div className="plan">
            <h1 className="userInfo">Current Plan Info: </h1>
            <div className="workoutPlan">
                <h2 className="planStatistics">Name: {props.plans.data[0].plan_name}</h2>
                <h2 className="planStatistics">Type: {props.plans.data[0].type_of_plan}</h2>
                <h2 className="planStatistics">Frequency: {props.plans.data[0].length_of_plan}</h2>
            </div>
        </div>
    )
}

export default Plan