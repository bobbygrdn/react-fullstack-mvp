const PlanButton = (props) => {

    const handleClick = (props) => {
        props.setShowPlan(true)
        props.setUpdateButton(false)
    }

    return(

        <button className="planButton" onClick={handleClick}>Update</button>

    )
}

export default PlanButton