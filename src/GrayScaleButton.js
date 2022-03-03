import React from "react";
import "./GrayScaleButton.css";

const GrayScaleButton = (props) => {
    return (
        <button onClick={props.onGrayScaleButtonClicked} className="grayScaleButton">Gray</button>
    )
}

export default GrayScaleButton;