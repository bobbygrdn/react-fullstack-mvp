import PlanForm from "./PlanForm"
import PlanButton from "./PlanButton"
import { useState } from 'react';

const Plan = (props) => {

    const [showPlan, setShowPlan] = useState(false);
    const [showUpdate, setUpdateButton] = useState(true);

    return (
        <div className="plan">
            <h1 className="userInfo">Current Plan Info: </h1>
            <div className="workoutPlan">
                <h2 className="planStatistics">Name: {props.plans.data[0].plan_name}</h2>
                <h2 className="planStatistics">Type: {props.plans.data[0].type_of_plan}</h2>
                <h2 className="planStatistics">Frequency: {props.plans.data[0].length_of_plan}</h2>
                {showPlan &&
                
                    <PlanForm plan={props.plans.data[0]} UpdateButton={setUpdateButton} showPlan={setShowPlan} />
                    
                }
                {showUpdate &&
                    
                    <PlanButton showPlan={setShowPlan} UpdateButton={setUpdateButton} />  
                    
                }
                
            </div>
        </div>
    )

}

export default Plan