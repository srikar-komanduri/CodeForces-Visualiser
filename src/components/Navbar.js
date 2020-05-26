import React from "react"
import {Link,NavLink,BrowserRouter} from "react-router-dom";
const Navbar = (props) =>{    
    return(
        <BrowserRouter>
                <div>
                <nav>
                        <div>
                        <a  className="brand-logo">Visualiser</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><NavLink to="/Home">Home</NavLink></li>
                                <li><NavLink to="/VRC">Virtual Rating Change</NavLink></li>
                        </ul>
                        </div>
                </nav>
                </div>
        </BrowserRouter>
    )



}

export default Navbar