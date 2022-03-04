//React
import React from 'react';

//componenten
import GrayScaleButton from "../GrayScaleButton";
import LovedButton from "../LovedButton";
import SearchBar from "../SearchBar";

const MainPage = ({ onSearch, name, sections, searchBarPlaceholder, filteredLoved }) => {
    return (
        <main>
            <GrayScaleButton/>
            <LovedButton filteredLoved = {filteredLoved}/>
            <SearchBar searchBarPlaceholder={searchBarPlaceholder} name={name} onSearch={onSearch} />
            {sections}
        </main>
    );
}

export default MainPage;