<<<<<<< HEAD
import React from "react";
import "./LoginCard.css";

class LoginCard extends React.Component{
    state = {username: "", password: ""};

    render(){
        return(
            <article className="loginCard">
                <header className="loginCard__header">
                    <h2 className="loginCard__heading"> {this.props.heading || "Placeholder heading"} </h2>
                </header>
                <section className="loginCard__body">
                    <form>
                        <div className="loginCard__wrapper">
                            <label htmlFor="username" className="loginCard__label"> {this.props.firstLabel || "Placeholder label"} </label>
                            <input id="username" className="loginCard__input" type="text" />
                        </div>
                        <div className="loginCard__wrapper">
                            <label htmlFor="password" className="loginCard__label">{this.props.secondLabel || "Placeholder label"}</label>
                            <input id="password" className="loginCard__input" type="password" />
                        </div>
                        <button className="loginCard__button loginCard__button--3D"></button>
                    </form>
                </section>
            </article>
        );
    }
}



export default LoginCard;
=======
//React
import React, { useState } from "react";

// React-Redux
import { connect } from "react-redux";

//helper functies
import { authenticate } from "./helperFunctions";

//style
import "./LoginCard.css";
import "./Animations.css";

const LoginCard = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        props.login(authenticate(username, password));
    }

    return (
        <article className="loginCard a-comeUp">
            <header className="loginCard__header">
                <h2 className="loginCard__heading"> {props.heading || "Placeholder heading"} </h2>
            </header>
            <section className="loginCard__body">
                <form onSubmit={ (event) => onSubmit(event) }>
                    <div className="loginCard__wrapper">
                        <label htmlFor="username" className="loginCard__label"> {props.firstLabel || "Placeholder label"} </label>
                        <input value={username} onChange={(event) => { setUsername(event.target.value) }} id="username" className="loginCard__input" type="text" />
                    </div>
                    <div className="loginCard__wrapper">
                        <label htmlFor="password" className="loginCard__label">{props.secondLabel || "Placeholder label"}</label>
                        <input value={password} onChange={(event) => { setPassword(event.target.value) }} id="password" className="loginCard__input" type="password" />
                    </div>
                    <button className="loginCard__button loginCard__button--3D"></button>
                </form>
            </section>
        </article>
    );
}

export const mapStateToProps = (state) => {
    return state;
}

export const mapDispatchToProps = (dispatch) => {
    return {
        login: (loggedIn) => { dispatch({ type: "LOGGING_IN", payload: loggedIn }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginCard);
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
