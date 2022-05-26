import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodoComponent extends Component{

    constructor(props) {
        super(props)
        // set the initial state
        this.state = {
            // initial list is empty
            todo :[ ],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }// end constructor

    // gets the data from the objects passed in the backend and set the state
    // for to do.
    componentDidMount(){
        this.refreshTodos()

    }// end comp mount

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodos(username)
            .then(
                response =>{
                    console.log(response)
                    this.setState({todo: response.data})
                }
            )
    }// end comp mount

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodos(username, id)
            .then(
                response=>{
                    this.setState({message: `Successfully Deleted id ${id}`})
                    this.refreshTodos()
                }
            )
    }
    render(){
        return (
            <div>
                <h1>List todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>is Completed ?</th>
                            <th>Target Date</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            // loops through the todos objects passed in
                            this.state.todo.map(
                                todo =>
                                    <tr key = {todo.id}>
                                        <th>{todo.description}</th>
                                        <th>{todo.completed.toString()}</th>
                                        <th>{todo.targetDate.toString()}</th>
                                        <td><button className="btn btn-warning">Update</button></td>
                                        <td><button className="btn btn-danger" onClick ={()=>this.deleteTodoClicked(todo.id)}>
                                            Delete
                                        </button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>)
    }// end render
}// end class
export default ListTodoComponent