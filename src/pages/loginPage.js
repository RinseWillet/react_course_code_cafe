import LoginCard from "../LoginCard";

const loginPage = ({ heading, firstLabel, secondLabel, onLogin }) => {

    return (
        <main>
            <LoginCard heading={heading} firstLabel={firstLabel} secondLabel={secondLabel} onLogin={onLogin} />
        </main>
    );
}

export default loginPage;