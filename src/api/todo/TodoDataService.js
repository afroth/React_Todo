import axios from "axios";
// Api for App delete update and add
class TodoDataService{
    // Get the objects passed in from the backend Spring Boot
    retrieveTodos(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }
    deleteTodos(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

}
export default new TodoDataService();