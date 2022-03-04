//React
import React from "react";

//style
import "./GrayScaleButton.css";

const GrayScaleButton = (props) => {
    return (
        <button onClick={props.onGrayScaleButtonClicked} className="grayScaleButton">Gray</button>
    )
}

export default GrayScaleButton;