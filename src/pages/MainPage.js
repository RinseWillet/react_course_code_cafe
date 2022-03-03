import LovedButton from "../LovedButton";
import SearchBar from "../SearchBar";

const MainPage = ({filteredLoved, lovedButtonPressed, onSearch, name, sections}) => {
    return (
    <main>
        <LovedButton filteredLoved={filteredLoved} lovedButtonPressed={lovedButtonPressed}/>
        <SearchBar lovedButtonPressed={lovedButtonPressed} name={name} onSearch={onSearch} /> 
        {sections}      
    </main>
    );
}

export default MainPage;