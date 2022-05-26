
import React, {Component} from "react";
import {Link} from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

 class WelcomeComponent extends Component{
     constructor(props) {
         super(props);
         this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
         this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
         this.handleErrorResponse = this.handleErrorResponse.bind(this)
         this.state = {

             welcomeMessage : ''
         }
    }
     render(){
         return (
             <div>
                 <h1>Welcome</h1>
                 <div className="container">
                     welcome {this.props.params.name}. manage your todos <Link to ="/todos">Here</Link>
                 </div>
                 <div className="container">
                     Click here for welcome message.
                     <button onClick ={this.retrieveWelcomeMessage} className="btn btn-success">
                         Get Welcome Message.
                     </button>
                 </div>
                 <div className ="container">
                     {this.state.welcomeMessage}
                 </div>
             </div>
         )
     }

     retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldService(this.props.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error =>this.handleErrorResponse(error))

     }

     handleSuccessfulResponse(response){
         this.setState({welcomeMessage: response.data.message})

     }
     handleErrorResponse(error){
         console.log(error.response)
         this.setState({welcomeMessage: error.response.data.message})

     }
 }

export default WelcomeComponent