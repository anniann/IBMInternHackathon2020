import React from "react"

function AnalyticsNum(props) {

    return (
        <div style={{color: props.color, fontSize: "170px", marginTop: "25px", marginLeft: props.offset}}>
            {props.value}
        </div>
    )
}

export default AnalyticsNum