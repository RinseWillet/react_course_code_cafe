import React from 'react';
import FilterContext from './FilterContext';
import "./LovedButton.css"

class LovedButton extends React.Component {

    press = (event) => {
        this.props.filteredLoved(!this.props.lovedButtonPressed);
    }

    render() {
        return <button data-filter={this.context} onClick={this.press} className="lovedButton" data-pressed={this.props.lovedButtonPressed}></button>
    }
}

LovedButton.contextType=FilterContext;

export default LovedButton;