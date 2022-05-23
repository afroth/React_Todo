import React, {Component} from "react";


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
            console.log("Success")
            this.props.navigate(`/welcome/${this.state.username}`)
        }
        else {
            console.log("fail")
            this.setState({loginSuccess:false})
            this.setState({loginFailed:true})
        }
    }

    //------------------------------------------------------------------------------------
    render(){
        return(
            <div>

                {this.state.loginFailed && <div>Invalid Credentials</div>}

                Username: <input type = "text" name = "username" value ={this.state.username}
                                 onChange ={this.handleChange}/>
                Password: <input type = "password" name = "password" value ={this.state.password}
                                 onChange ={this.handleChange}/>
                <button onClick = {this.loginClicked}>Login</button>
            </div>
        )
    }// end render

}// end class LoginComponent.jsx
export default LoginComponent