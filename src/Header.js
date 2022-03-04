<<<<<<< HEAD
import "./Header.css";

const Header = (props) => {
    return (
        <header className="mediaSection__header">
            <h2 className="mediaSection__heading">{props.text || "Placeholder Header Text"}</h2>
=======
//React
import React from 'react';

//style
import "./Header.css";

const Header = ({text}) => {
    return (
        <header className="mediaSection__header">
            <h2 className="mediaSection__heading">{text || "Placeholder Header Text"}</h2>
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
        </header>
    );
}

export default Header;