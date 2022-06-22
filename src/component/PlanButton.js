const PlanButton = (props) => {

    const handleClick = () => {
        props.showPlan(true)
        props.UpdateButton(false)
    }

    return(

        <button className="planButton" onClick={handleClick}>Update</button>

    )
}

export default PlanButton