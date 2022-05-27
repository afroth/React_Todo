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
import LogoutComponent from "./LogoutComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import TodoComponent from "./TodoComponent";


class TodoApp extends Component{

    render(){
        const ListTodoComponentWithParams = withNavigation(ListTodoComponent);
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));
        const WelcomeComponentWithParams = withParams(WelcomeComponent);

        return(
            <div className = "todo-app">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={
                                                                <AuthenticatedRoute>
                                                                    <WelcomeComponentWithParams />
                                                                </AuthenticatedRoute>
                        } />
                        <Route path="/todos/:id" element={
                                                                <AuthenticatedRoute>
                                                                    <TodoComponentWithParamsAndNavigation />
                                                                </AuthenticatedRoute>
                        } />
                        <Route path="/todos" element={
                                                                <AuthenticatedRoute>
                                                                    <ListTodoComponentWithParams />
                                                                </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                                                                <AuthenticatedRoute>
                                                                    <LogoutComponent />
                                                                </AuthenticatedRoute>
                        } />

                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default TodoApp