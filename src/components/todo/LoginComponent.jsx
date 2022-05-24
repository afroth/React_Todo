import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService.js";


class LoginComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: 'new-user',
            password: 'password',
            loginFailed: false,
            loginSuccess: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }// end constructor

    //------------------------------------------------------------------------------------
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return(
            <div>
                <h1>Login</h1>
                <div className="container">

                    {this.state.loginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    Username: <input type = "text" name = "username" value ={this.state.username}
                                     onChange ={this.handleChange}/>
                    Password: <input type = "password" name = "password" value ={this.state.password}
                                     onChange ={this.handleChange}/>
                    <button className="btn btn=success" onClick = {this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }// end render
    //------------------------------------------------------------------------------------
    handleChange(event){
        console.log(event.target.value);
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        )
    }// end handleUsernameChange

    // //------------------------------------------------------------------------------------
    loginClicked(){
        if(this.state.username ==='new-user'&& this.state.password === 'password' ){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)

            this.props.navigate(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({loginSuccess:false})
            this.setState({loginFailed:true})
        }
    }
}// end class LoginComponent.jsx
export default LoginComponent