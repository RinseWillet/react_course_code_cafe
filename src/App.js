//React
import React from "react";
import { Route, Switch } from "react-router-dom";

//React-Redux
import {connect} from "react-redux";

//pagina's
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SectionPage from "./pages/SectionPage";

//componenten
import MediaSection from "./MediaSection";
import FilterContext from "./FilterContext";

//helper functies
import { scrollIntoWindow } from "./helperFunctions";

//data
import sectionData from "./sectionData";

//styling
import "./App.css";

class App extends React.Component {
    state = { filter: "" };

    filteredLoved = () => {
        if (!this.props.lovedButtonPressed === false) { this.onSearch(); return }
        let filteredSections = sectionData.filter(section => {
            return section.favorite === true;
        }).map(section => {
            return (
                <MediaSection
                    headerText={section.headerText}
                    extraClass={section.extraClass || ""}
                    pictures={section.pictures || undefined}
                    videos={section.videos || undefined}
                    type={section.type || "pictures"}
                    key={section.id}
                    favorite={section.favorite || false}
                    customSizes={section.customSizes || undefined}
                    link={"/sections/" + section.id || undefined}
                />
            );
        });
        this.props.updateSections(filteredSections);        
    }

    onSearch = (searchTerm = "") => {
        let filteredSections = sectionData.filter(section => {
            return section.headerText.toLowerCase().search(searchTerm.toLowerCase()) !== -1;
        }).map(section => {
            return (
                <MediaSection
                    headerText={section.headerText}
                    extraClass={section.extraClass || ""}
                    pictures={section.pictures || undefined}
                    videos={section.videos || undefined}
                    type={section.type || "pictures"}
                    key={section.id}
                    favorite={section.favorite || false}
                    customSizes={section.customSizes || undefined}
                    link={"/sections/" + section.id || undefined}
                />
            );
        });
        this.props.updateSections(filteredSections);  
    }

    componentDidMount() {
        this.onSearch();
    }

    componentDidUpdate() {
        scrollIntoWindow();
    }

    render() {
        let main = <LoginPage
            heading="MyFlix Login"
            firstLabel="Gebruikersnaam"
            secondLabel="Wachtwoord"
        />

        if (this.props.loggedIn === true) {
            main = <MainPage
                filteredLoved={this.filteredLoved}
                lovedButtonPressed={this.props.lovedButtonPressed}
                name="Rinse"
                onSearch={this.onSearch}
                sections={this.props.sections}
                searchBarPlaceholder="Probeer Forest of Beach"
                onGrayScaleButtonClicked = { () => this.state.filter === "grayscale" ? this.setState({filter: ""}) : this.setState({filter: "grayscale"})}
            />
        }
        return (
            <FilterContext.Provider value={this.props.filter}>
                <Switch>
                    <Route path="/sections/:sectionId" component={SectionPage} />
                    <Route path="/">
                        {main}
                    </Route>
                </Switch>
            </FilterContext.Provider>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        lovedButtonPressed: state.lovedButtonPressed,
        loggedIn: state.loggedIn,
        sections: state.sections,
        filter: state.filterContext
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        updateSections: (filteredSections) => { dispatch({type: "SECTIONS", payload: filteredSections}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);