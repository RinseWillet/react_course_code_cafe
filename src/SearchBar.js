import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {

    state = {searchTerm: ""};

    onChange = (event) => {
        //de state wordt aangepast op basis van wat er in de zoekbalk als event binnenkomt
        this.setState({searchTerm: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.searchTerm);        
    }

    render() {
        return (
            <section data-lovedButtonPressed={this.props.lovedButtonPressed} className="searchSection">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="searchBar" className="searchSection__label" >
                        Hallo
                        <span className="searchSection__labelName">
                        {" " + this.props.name + ", " || " "}
                        </span>
                        zoek je iets?
                    </label>                  
                    <input placeholder={this.props.searchBarPlaceholder || "Zoek hier je sectie"} className="searchSection__searchBar" value={this.state.searchTerm} onChange={this.onChange} type="text" id="searchBar" />
                    <span className="searchSection__searchLogo" onClick={this.onSubmit}></span>
                </form>
            </section>
        );
    }
}

export default SearchBar;