<<<<<<< HEAD
//react
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

//pagina's
import MainPage from "./MainPage";
import LoginCard from "./LoginCard";

//componenten
import MediaSection from "./MediaSection";
import SearchBar from "./SearchBar";
=======
//React
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

//React-Redux
import { connect } from "react-redux";

//pagina's
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SectionPage from "./pages/SectionPage";

//componenten
import MediaSection from "./MediaSection";
import FilterContext from "./FilterContext";
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa

//helper functies
import { scrollIntoWindow } from "./helperFunctions";

//data
<<<<<<< HEAD
import sections from "./sectionData";
=======
import sectionData from "./sectionData";
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa

//styling
import "./App.css";

<<<<<<< HEAD
class App extends React.Component {
    state = { sections: "", lovedButtonPressed: false };

    filteredLoved = (state) => {
        this.setState({ lovedButtonPressed: state });
        if (state === false) { this.onSearch(); return }
        let filteredSections = sections.filter(section => {
=======
const App = (props) => { 

    const filteredLoved = () => {
        if (!props.lovedButtonPressed === false) { onSearch(); return }
        let filteredSections = sectionData.filter(section => {
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
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
<<<<<<< HEAD
                />
            );
        });
        this.setState({ sections: filteredSections })
    }

    onSearch = (searchTerm = "") => {
        let filteredSections = sections.filter(section => {
=======
                    link={"/sections/" + section.id || undefined}
                />
            );
        });
        props.updateSections(filteredSections);
    }

    const onSearch = (searchTerm = "") => {
        let filteredSections = sectionData.filter(section => {
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
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
<<<<<<< HEAD
                />
            );
        });
        this.setState({ sections: filteredSections });
    }

    componentDidMount() {
        this.onSearch();
    }

    componentDidUpdate() {
        scrollIntoWindow();
    }

    render() {
        return (
            <Switch>
                <Route path="/home">
                    <MainPage
                        filteredLoved={this.filteredLoved}
                        lovedButtonPressed={this.state.lovedButtonPressed}
                        name="Rinse"
                        onSearch={this.onSearch}
                        sections={this.state.sections}
                    />
                </Route>
                <Route path="/login">
                    <LoginCard/>
                </Route>
                <Route path="/">
                    <p>probeer eens /home of /login</p>
                </Route>
            </Switch>
        );
    }
}

export default App;
=======
                    link={"/sections/" + section.id || undefined}
                />
            );
        });
        props.updateSections(filteredSections);
    }

    useEffect(() => {
        onSearch();
    }, [])

    useEffect(() => {
        scrollIntoWindow();
    })

    let main = <LoginPage
        heading="MyFlix Login"
        firstLabel="Gebruikersnaam"
        secondLabel="Wachtwoord"
    />

    if (props.loggedIn === true) {
        main = <MainPage
            filteredLoved={filteredLoved}            
            name="Rinse"
            onSearch={onSearch}
            sections={props.sections}
            searchBarPlaceholder="Probeer Forest of Beach"            
        />
    }
    return (
        <FilterContext.Provider value={props.filter}>
            <Switch>
                <Route path="/sections/:sectionId" component={SectionPage} />
                <Route path="/">
                    {main}
                </Route>
            </Switch>
        </FilterContext.Provider>
    );
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
        updateSections: (filteredSections) => { dispatch({ type: "SECTIONS", payload: filteredSections }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
