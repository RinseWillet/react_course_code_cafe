import "./Header.css";

const Header = (props) => {
    return (
        <header className="mediaSection__header">
            <h2 className="mediaSection__heading">{props.text || "Placeholder Header Text"}</h2>
        </header>
    );
}

export default Header;