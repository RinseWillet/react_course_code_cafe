import React from 'react';
import GrayScaleButton from "../GrayScaleButton";
import LovedButton from "../LovedButton";
import SearchBar from "../SearchBar";

const MainPage = ({ filteredLoved, lovedButtonPressed, onSearch, name, sections, searchBarPlaceholder, onGrayScaleButtonClicked }) => {
    return (
        <main>
            <GrayScaleButton onGrayScaleButtonClicked={onGrayScaleButtonClicked}/>
            <LovedButton filteredLoved={filteredLoved} lovedButtonPressed={lovedButtonPressed} />
            <SearchBar searchBarPlaceholder={searchBarPlaceholder} lovedButtonPressed={lovedButtonPressed} name={name} onSearch={onSearch} />
            {sections}
        </main>
    );
}

export default MainPage;