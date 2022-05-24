
import React, {Component} from "react";
import {Link} from "react-router-dom";


 class WelcomeComponent extends Component{

     render(){
         return (
             <div>
                 <h1>Welcome</h1>
                 <div className="container">
                     welcome {this.props.params.name}. manage your todos <Link to ="/todos">Here</Link>
                 </div>
             </div>
         )
     }
 }

export default WelcomeComponent