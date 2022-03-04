<<<<<<< HEAD
=======
//React
import React, {useContext} from 'react';

//React redux
import { useSelector, useDispatch } from 'react-redux';

//componenten
import FilterContext from './FilterContext';
import { changeLovedButtonPressed } from './actions';

//style
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
import "./LovedButton.css"

const LovedButton = (props) => {

<<<<<<< HEAD
    const press = (event) => {
        props.filteredLoved(!props.lovedButtonPressed);
    }

    return <button onClick={press} className="lovedButton" data-pressed={props.lovedButtonPressed}></button>
=======
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
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
}

export default LovedButton;