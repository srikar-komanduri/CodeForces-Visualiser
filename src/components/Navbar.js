import React from "react"
import Choices from "./Choices";
import Home from "./Home";
import HomeAtcoder from "./HomeAtcoder";
import HomeCodechef from "./HomeCodechef";
import { Route, BrowserRouter,Link,NavLink } from 'react-router-dom'
import Feedback from "./Feedback";
import Success from "./Success";

const Navbar = (props) =>{    
    return(
        <BrowserRouter>
                <div>
                <nav className="purple darken-1">
                        <div>
                        <a  className="brand-logo"><NavLink to="/">CP Visualiser</NavLink></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/Home">Codeforces</NavLink></li>
                                <li><NavLink to="/atcoder">AtCoder</NavLink></li>
                                <li><NavLink to="/codechef">CodeChef</NavLink></li>
                                <li><NavLink to="/feedback">Give feedback!</NavLink></li>
                        </ul>
                        </div>
                </nav>
                </div>
                <Route exact path='/' component={Choices}/> 
                <Route exact path='/Home' component={Home}/>
                <Route exact  path='/atcoder' component={HomeAtcoder} />
                <Route exact path='/codechef' component={HomeCodechef} />
                <Route exact path='/feedback' component={Feedback} />
                <Route exact path='/success' component={Success} />
        </BrowserRouter>
    )



}

export default Navbar