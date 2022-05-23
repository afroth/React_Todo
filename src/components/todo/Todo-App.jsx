import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import withNavigation from "./WithNavigation";
import withParams from "./withParams";
import ErrorComponent from "./ErrorComponent";
import LoginComponent from "./LoginComponent";
import ListTodoComponent from "./ListTodoComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";


class TodoApp extends Component{

    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const ListTodoComponentWithParams = withParams(ListTodoComponent);
        return(
            <div className = "todo-app">

                <Router>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams/>} />
                        <Route path="/todos" element={<ListTodoComponentWithParams/>} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent/>
                </Router>

            </div>

        )
    }
}

export default TodoApp