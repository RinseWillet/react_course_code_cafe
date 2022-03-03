import React from 'react';
import "./Text.css";

const Text = ({description}) => {
    return <p className="sectionCard__description">  {description || "Placeholder text"}</p>
}

export default Text;