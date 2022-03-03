import "./LovedButton.css"

const LovedButton = (props) => {

    const press = (event) => {
        props.filteredLoved(!props.lovedButtonPressed);
    }

    return <button onClick={press} className="lovedButton" data-pressed={props.lovedButtonPressed}></button>
}

export default LovedButton;