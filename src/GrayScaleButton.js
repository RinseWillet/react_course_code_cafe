//React
import React from "react";

//React-Redux
import { connect } from "react-redux";

//style
import "./GrayScaleButton.css";

const GrayScaleButton = (props) => {

    const clickButton = () => {
        if(props.filter !== "grayscale"){
            return props.changeFilter("grayscale");
        }
        return props.changeFilter("");
    }

    return (
        <button onClick={clickButton} className="grayScaleButton">Gray</button>
    )
}

export const mapStateToProps = (state) => {
    return {
        filter: state.filterContext
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (filter) => dispatch({type: "FILTER", payload: filter})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrayScaleButton);