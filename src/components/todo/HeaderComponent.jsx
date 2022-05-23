import {Component} from "react";
import {Link} from "react-router-dom";
class HeaderComponent extends Component{

    render(){

        return(
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                      <div><a href = "https://afroth.github.io" target="_blank" className="navbar-brand"> Todos App</a></div>
                      <ul className="navbar-nav">
                          <li className ="nav-link"><Link className = "nav-link" to ='/welcome/:name'>Home</Link></li>
                          <li className ="nav-link"><Link className = "nav-link" to = '/todos'>Todos</Link></li>
                      </ul>
                      <ul className= "navbar-nav navbar-collapse justify-content-end">
                          <li className ="nav-link"><Link className = "nav-link" to = '/login'>Login in</Link></li>
                          <li className ="nav-link">Log out</li>
                      </ul>
                    </nav>
                </header>
            )
    }

}
export default HeaderComponent