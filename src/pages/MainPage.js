import LovedButton from "../LovedButton";
import SearchBar from "../SearchBar";

const MainPage = ({ filteredLoved, lovedButtonPressed, onSearch, name, sections, searchBarPlaceholder }) => {
    return (
        <main>
            <LovedButton filteredLoved={filteredLoved} lovedButtonPressed={lovedButtonPressed} />
            <SearchBar searchBarPlaceholder={searchBarPlaceholder} lovedButtonPressed={lovedButtonPressed} name={name} onSearch={onSearch} />
            {sections}
        </main>
    );
}

export default MainPage;