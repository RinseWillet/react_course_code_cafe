//React
import React, {useState} from "react";

//React-Redux
import { connect } from "react-redux";

//style
import "./SearchBar.css";
import "./Animations.css";

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const onChange = (event) => {
        //de searchTerm wordt aangepast op basis van wat er in de zoekbalk als event binnenkomt
        setSearchTerm(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.onSearch(searchTerm);        
    }
 
        return (
            <section data-lovedbuttonpressed={props.lovedButtonPressed} className="searchSection a-comeUp">
                <form onSubmit={onSubmit}>
                    <label htmlFor="searchBar" className="searchSection__label" >
                        Hallo
                        <span className="searchSection__labelName">
                        {" " + props.name + ", " || " "}
                        </span>
                        zoek je iets?
                    </label>                  
                    <input placeholder={props.searchBarPlaceholder || "Zoek hier je sectie"} className="searchSection__searchBar" value={searchTerm} onChange={onChange} type="text" id="searchBar" />                    
                </form>
            </section>
        );    
}

export const mapStateToProps = (state) => {
    return {
        lovedButtonPressed: state.lovedButtonPressed
    }
}

export default connect(mapStateToProps, {})(SearchBar);
