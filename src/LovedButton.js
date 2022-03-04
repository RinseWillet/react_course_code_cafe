//React
import React, {useContext} from 'react';

//React redux
import { connect } from 'react-redux';

//componenten
import FilterContext from './FilterContext';

//style
import "./LovedButton.css"

const LovedButton = (props) => {

    console.log(props.lovedButtonPressed);
    const filter = useContext(FilterContext);

    const press = (event) => {
        props.changeLovedButtonPressed(props.lovedButtonPressed)
        props.filteredLoved();
    }

    return <button data-filter={filter} onClick={press} className="lovedButton" data-pressed={props.lovedButtonPressed}></button>

}

export const mapStateToProps = (state) => {
    return {
        lovedButtonPressed: state
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        changeLovedButtonPressed: (lovedButtonPressed) => dispatch({type: "PRESSING_LOVED_BUTTON", payload: !lovedButtonPressed})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LovedButton);