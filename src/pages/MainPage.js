//React
import React from 'react';

//componenten
import GrayScaleButton from "../GrayScaleButton";
import LovedButton from "../LovedButton";
import SearchBar from "../SearchBar";

const MainPage = ({ filteredLoved, lovedButtonPressed, onSearch, name, sections, searchBarPlaceholder, onGrayScaleButtonClicked }) => {
    return (
        <main>
            <GrayScaleButton/>
            <LovedButton filteredLoved={filteredLoved} />
            <SearchBar searchBarPlaceholder={searchBarPlaceholder} lovedButtonPressed={lovedButtonPressed} name={name} onSearch={onSearch} />
            {sections}
        </main>
    );
}

export default MainPage;