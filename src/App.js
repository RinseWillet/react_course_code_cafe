//react
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

//pagina's
import MainPage from "./MainPage";
import LoginCard from "./LoginCard";

//componenten
import MediaSection from "./MediaSection";
import SearchBar from "./SearchBar";

//helper functies
import { scrollIntoWindow } from "./helperFunctions";

//data
import sections from "./sectionData";

//styling
import "./App.css";

class App extends React.Component {
    state = { sections: "", lovedButtonPressed: false };

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
                />
            );
        });
        this.setState({ sections: filteredSections })
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