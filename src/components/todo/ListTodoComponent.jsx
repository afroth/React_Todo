import React, {Component} from "react";

class ListTodoComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {
            todo :[
                {id: 1, description :"learn React", done: false, targetDate: new Date()},
                {id: 2, description :"get Interview", done: false, targetDate: new Date()},
                {id: 3, description :"get job", done: false, targetDate: new Date()}
            ]
        }
    }
    render(){
        return (
            <div>

            <h1>List todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>is Completed ?</th>
                        <th>Target Date</th>

                    </tr>
                </thead>
                <tbody>
                {
                    this.state.todo.map(
                        todo =>
                            <tr>
                                <th>{todo.id}</th>
                                <th>{todo.description}</th>
                                <th>{todo.done.toString()}</th>
                                <th>{todo.targetDate.toString()}</th>
                            </tr>
                    )

                }

                </tbody>
            </table>
            </div>)
    }


}
export default ListTodoComponent