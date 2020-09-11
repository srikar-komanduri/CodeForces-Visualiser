import React , {Component} from "react";
import Home from "./Home";
import HomeAtcoder from "./HomeAtcoder";
import HomeCodechef from "./HomeCodechef";
import { Route, BrowserRouter,Link,NavLink } from 'react-router-dom'


class  Choices extends Component{
    
    render(){
        return(
            <div className="container choice">
                <div className="card">
                    <div className="card-content choicecard">
                        <span className="card-title choicetitle"><b>Welcome To CP Visualiser</b></span>
                        <p className="choicecontent">The Best Destination to check your competitve programming statistics.</p>
                        <p className="choicecontent">Select any website from Here to get started.</p>
                    </div>
                    <div className="card-action">
                    <NavLink to="/Home">Codeforces</NavLink>
                    <NavLink to="/atcoder">AtCoder</NavLink>
                    <NavLink to="/codechef">CodeChef</NavLink>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content choicecard">
                        <span className="card-title choicetitle"><b>What is CP Visualiser</b></span>
                        <p className="choicecontent">Did you ever wish there was a tool where you could see your progress in competitive programming? you have come to the right place </p>
                        <p className="choicecontent">xxxxxxxxxx</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content choicecard">
                        <span className="card-title choicetitle"><b>Who can use CP Visualiser?</b></span>
                        <p className="choicecontent">Did you ever wish there was a tool where you could see your progress in competitive programming? you have come to the right place </p>
                        <p className="choicecontent">xxxxxxxxxx</p>
                    </div>
                </div>

            </div>
    
        )
    

    }
    


}




export default Choices;













