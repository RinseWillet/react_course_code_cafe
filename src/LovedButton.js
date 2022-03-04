//React
import React, {useContext} from 'react';

//React redux
import { useSelector, useDispatch } from 'react-redux';

//componenten
import FilterContext from './FilterContext';
import { changeLovedButtonPressed } from './actions';

//style
import "./LovedButton.css"

const LovedButton = (props) => {

    const filter = useContext(FilterContext);

    //useSelector lijkt op mapStateToProps, maar is voor 1 enkele state
    const lovedButtonPressed = useSelector( (state) => state.lovedButtonPressed);
    //useDispatch lijkt op mapDispatchToProps - let op: het object met type en payload geef je mee op moment van aanroepen!
    const dispatchLovedButtonPressed = useDispatch();

    const press = (event) => {
        dispatchLovedButtonPressed(changeLovedButtonPressed(!lovedButtonPressed))
        props.filteredLoved();
    }

    return <button data-filter={filter} onClick={press} className="lovedButton" data-pressed={props.lovedButtonPressed}></button>
}

export default LovedButton;