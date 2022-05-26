import {Component} from "react";
import {Link} from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";
import withParams from "./withParams";
import WelcomeComponent from "./WelcomeComponent";
class HeaderComponent extends Component{

    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return(
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                      <div><a href = "https://afroth.github.io" target="_blank" className="navbar-brand" rel="noreferrer"> PortFolio</a></div>
                      <ul className="navbar-nav">
                          {isUserLoggedIn && <li><Link className="nav-link" to='/welcome/new-user' element={
                                  <WelcomeComponentWithParams />
                          }>Home</Link></li>}
                          {isUserLoggedIn && <li><Link className="nav-link" to='/todos'>Todos</Link></li>}
                      </ul>
                      <ul className= "navbar-nav navbar-collapse justify-content-end">
                          {!isUserLoggedIn && <li><Link className="nav-link" to='/login'>Login in</Link></li>}

                          {isUserLoggedIn && <li><Link className="nav-link" onClick={AuthenticationService.logout}
                                     to='/logout'>Logout</Link></li>}
                      </ul>
                    </nav>
                </header>
            )
    }

}
export default HeaderComponent