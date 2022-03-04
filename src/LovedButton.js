//React
import React, {useContext} from 'react';

//componenten
import FilterContext from './FilterContext';

//style
import "./LovedButton.css"

const LovedButton = (props) => {

    const filter = useContext(FilterContext);

    const press = (event) => {
        props.filteredLoved(!props.lovedButtonPressed);
    }

    return <button data-filter={filter} onClick={press} className="lovedButton" data-pressed={props.lovedButtonPressed}></button>

}

export default LovedButton;