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