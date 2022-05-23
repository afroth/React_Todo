
import React, {Component} from "react";
import {Link} from "react-router-dom";


 class WelcomeComponent extends Component{

     render(){
         return  <div> welcome {this.props.params.name}. manage your todos <Link to ="/todos">Here</Link></div>
     }
 }

export default WelcomeComponent