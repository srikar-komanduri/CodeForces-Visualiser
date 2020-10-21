import React , {Component} from "react";
import Home from "./Home";
import HomeAtcoder from "./HomeAtcoder";
import HomeCodechef from "./HomeCodechef";
import $ from 'jquery';
import { Route, BrowserRouter,Link,NavLink } from 'react-router-dom'


class  Choices extends Component{
    



    render(){
        return(
            <div>
                <div className="parallax"></div>
                
                <div class="container mt-3">
                    <h2>Welcome To CP Visualiser</h2>
                    <br/>
                    
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#home">what is cpv</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu2">how to use it?</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu3">who is this for?</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu4">support us!</a>
                        </li>
                    </ul>

                    
                    <div class="tab-content">
                        <div id="home" class="container tab-pane active"><br/>
                        <h3>Check Your stats with one click</h3>
                        <p>The Best Destination to check your competitve programming statistics.</p>
                        <img src="https://cdn.whatagraph.com/blog/parameter-vs-statistic.jpg" className="fixedimage2"/>
                        
                        </div>
                        <div id="menu2" class="container tab-pane fade"><br/>
                        <h3>How to use it?</h3>
                        <p>Just go to any tab in navbar and enter your respective website username.</p>
                        <p>That's it. you can see your stats from that website.</p>
                        <p>OR Just Select any website given below here to get started.</p>
                        <NavLink to="/Home">Codeforces</NavLink><br/>
                        <NavLink to="/atcoder">AtCoder</NavLink><br/>
                        <NavLink to="/codechef">CodeChef</NavLink><br/>
                        </div>
                        <div id="menu3" class="container tab-pane fade"><br/>
                        <h3>Who is this for?</h3>
                        <p>if you have any account in any of the 3 programming websites, you can check your stats.</p>
                        <p>or you can view other's account's stats too!!</p>
                        </div>
                        <div id="menu4" class="container tab-pane fade"><br/>
                        <h3>support us!</h3>
                        <p>You can go to our github repository and sponsor us or you can star the repo.</p>
                        <a href="https://github.com/srikar7777">Click here to go to github</a>
                        </div>
                    </div>
                </div><br/> 
                <div class="jumbotron">
                    <h2>Have any suggestions?</h2>
                    <p>Don't forget to leave feedback!!</p>
                    <NavLink to="/feedback" className="blue-text text-darken-2">Click here to give feedback</NavLink>
                </div>
                <div class="container mt-3">
                    <div class="card">
                        <div class="card-body">
                        
                        </div>
                    </div>
                </div>













                <div className="parallax2"></div>
            </div>
        )
        
        
          

    }
    


}




export default Choices;













