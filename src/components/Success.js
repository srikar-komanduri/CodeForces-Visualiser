import React from "react"
import Choices from "./Choices";
import Home from "./Home";
import HomeAtcoder from "./HomeAtcoder";
import HomeCodechef from "./HomeCodechef";
import { Route, BrowserRouter,Link,NavLink } from 'react-router-dom'

const Success = (props) =>{    
    return(
           <div>

             
            <img src="https://www.bigprinting.co.uk/wp-content/uploads/2020/06/green-tick.png" className="fixedimage"/>
            <center><p>Your feedback was recieved successfully ! </p></center>
            <center><a href="/">Click here to go to Home page</a></center>








           </div> 
    )



}

export default Success