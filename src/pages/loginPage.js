//React
import React from 'react';

//componenten
import LoginCard from "../LoginCard";

const loginPage = ({ heading, firstLabel, secondLabel}) => {

    return (
        <main>
            <LoginCard heading={heading} firstLabel={firstLabel} secondLabel={secondLabel}/>
        </main>
    );
}

export default loginPage;