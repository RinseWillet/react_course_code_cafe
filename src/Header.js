//React
import React from 'react';

//style
import "./Header.css";

const Header = ({text}) => {
    return (
        <header className="mediaSection__header">
            <h2 className="mediaSection__heading">{text || "Placeholder Header Text"}</h2>
        </header>
    );
}

export default Header;