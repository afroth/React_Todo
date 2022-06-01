import axios from "axios";
// Api for App delete update and add
class TodoDataService{

    // Get the objects passed in from the backend Spring Boot
    retrieveTodos(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }

    //deletes the item based on the name and id
    deleteTodos(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    // get a single to-do item based on the name and from incoming data
    retrieveTodo(name, id){
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
    }


    updateTodo(name,id,todo){
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
    }

    createTodo(name, todo){
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo)
    }

}// end class
export default new TodoDataService();