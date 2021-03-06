import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

class ListTodoComponent extends Component{

    constructor(props) {
        super(props)
        // set the initial state
        this.state = {
            // initial list is empty
            todo :[ ],
            message: null
        }
        // binding method to constructor
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodoClicked= this.updateTodoClicked.bind(this)
        this.addNewClicked= this.addNewClicked.bind(this)
    }// end constructor

    //***********************************************************************************
    // gets the data from the objects passed in the backend and set the state
    // for to do.
    componentDidMount(){
        this.refreshTodos()

    }// end comp mount

    //***********************************************************************************
    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodos(username)
            .then(
                response =>{
                    this.setState({todo: response.data})
                }
            )
    }// end comp mount

    //***********************************************************************************
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
    //***********************************************************************************
    // when the update button is clicked navigate to to-do id
    updateTodoClicked(id){
        this.props.navigate(`/todos/${id}`)

    }
    //***********************************************************************************
    //
   addNewClicked(){
        this.props.navigate(`/todos/-1`)

    }

    //***********************************************************************************
    //
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
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick ={()=>this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-danger" onClick ={()=>this.deleteTodoClicked(todo.id)}>
                                            Delete
                                        </button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="container">
                        <button className ="btn btn-success"onClick ={()=>this.addNewClicked()}>Add New</button>

                    </div>
                </div>
            </div>)
    }// end render
}// end class
export default ListTodoComponent