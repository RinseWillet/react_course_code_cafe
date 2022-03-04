//React
import React from "react";
import { Route, Switch } from "react-router-dom";

//pagina's
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SectionPage from "./pages/SectionPage";

//componenten
import MediaSection from "./MediaSection";
import FilterContext from "./FilterContext";

//helper functies
import { scrollIntoWindow, authenticate } from "./helperFunctions";

//data
import sections from "./SectionData";

//styling
import "./App.css";

class App extends React.Component {
    state = { sections: "", lovedButtonPressed: false, loggedIn: false, filter: "" };

    filteredLoved = (state) => {
        this.setState({ lovedButtonPressed: state });
        if (state === false) { this.onSearch(); return }
        let filteredSections = sections.filter(section => {
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

        this.setState({ sections: filteredSections })
    }

    onLogin = (username, password) => {
        this.setState({ loggedIn: authenticate(username, password) });
    }

    onSearch = (searchTerm = "") => {
        let filteredSections = sections.filter(section => {
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
        this.setState({ sections: filteredSections });
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
            onLogin={this.onLogin}

        />

        if (this.state.loggedIn === true) {
            main = <MainPage
                filteredLoved={this.filteredLoved}
                lovedButtonPressed={this.state.lovedButtonPressed}
                name="Rinse"
                onSearch={this.onSearch}
                sections={this.state.sections}
                searchBarPlaceholder="Probeer Forest of Beach"
                onGrayScaleButtonClicked = { () => this.state.filter === "grayscale" ? this.setState({filter: ""}) : this.setState({filter: "grayscale"})}
            />
        }
        return (
            <FilterContext.Provider value={this.state.filter}>
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

export default App;