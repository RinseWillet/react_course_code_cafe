//React
import React from "react";

//style
import "./LoginCard.css";
import "./Animations.css";

class LoginCard extends React.Component{
    state = {username: "", password: ""};

    setUsername = (event) => {
        this.setState({username: event.target.value});
    }

    setPassword = (event) => {
        this.setState({password: event.target.value});
    }

    login = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state.username, this.state.password);
    }

    render(){
        return(
            <article className="loginCard a-comeUp">
                <header className="loginCard__header">
                    <h2 className="loginCard__heading"> {this.props.heading || "Placeholder heading"} </h2>
                </header>
                <section className="loginCard__body">
                    <form onSubmit={this.login}>
                        <div className="loginCard__wrapper">
                            <label htmlFor="username" className="loginCard__label"> {this.props.firstLabel || "Placeholder label"} </label>
                            <input value={this.state.username} onChange={this.setUsername} id="username" className="loginCard__input" type="text" />
                        </div>
                        <div className="loginCard__wrapper">
                            <label htmlFor="password" className="loginCard__label">{this.props.secondLabel || "Placeholder label"}</label>
                            <input value={this.state.password} onChange={this.setPassword} id="password" className="loginCard__input" type="password" />
                        </div>
                        <button className="loginCard__button loginCard__button--3D"></button>
                    </form>
                </section>
            </article>
        );
    }
}



export default LoginCard;