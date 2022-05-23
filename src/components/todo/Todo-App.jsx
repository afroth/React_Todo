import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import withNavigation from "./WithNavigation";
import withParams from "./withParams";
import ErrorComponent from "./ErrorComponent";
import LoginComponent from "./LoginComponent";
import ListTodoComponent from "./ListTodoComponent";
class TodoApp extends Component{

    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const ListTodoComponentWithParams = withParams(ListTodoComponent);
        return(
            <div className = "todo-app">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams/>} />
                        <Route path="/todos" element={<ListTodoComponentWithParams/>} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                </Router>
            </div>

        )
    }
}


//************************************************************************************
// class LoginComponent extends Component{
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: 'new-user',
//             password: 'password',
//             loginFailed: false,
//             loginSuccess: false
//         }
//
//         this.handleChange = this.handleChange.bind(this)
//         this.loginClicked = this.loginClicked.bind(this)
//     }// end constructor
//
//     //------------------------------------------------------------------------------------
//     handleChange(event){
//         console.log(event.target.value);
//         this.setState(
//             {
//                 [event.target.name]
//                 :event.target.value
//             }
//         )
//     }// end handleUsernameChange
//
//     // //------------------------------------------------------------------------------------
//     loginClicked(){
//         if(this.state.username ==='new-user'&& this.state.password === 'password' ){
//             console.log("Success")
//             this.props.navigate(`/welcome/${this.state.username}`)
//         }
//         else {
//             console.log("fail")
//             this.setState({loginSuccess:false})
//             this.setState({loginFailed:true})
//         }
//     }
//
//     //------------------------------------------------------------------------------------
//     render(){
//         return(
//             <div>
//
//                 {this.state.loginFailed && <div>Invalid Credentials</div>}
//
//                 Username: <input type = "text" name = "username" value ={this.state.username}
//                                   onChange ={this.handleChange}/>
//                 Password: <input type = "password" name = "password" value ={this.state.password}
//                                  onChange ={this.handleChange}/>
//                 <button onClick = {this.loginClicked}>Login</button>
//             </div>
//         )
//     }// end render
//
// }// end class LoginComponent.jsx

export default TodoApp