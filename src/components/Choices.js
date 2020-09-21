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
                <div className="container choice">
                <div class="row">
                    <div class="col s12">
                    <ul class="tabs">
                        <li class="tab col s3"><a href="#test1">what is cpv</a></li>
                        <li class="tab col s3"><a class="active" href="#test2">how to use it?</a></li>
                        <li class="tab col s3 "><a href="#test3">who is this for?</a></li>
                        <li class="tab col s3"><a href="#test4">support us!</a></li>
                    </ul>
                    </div>
                    <div id="test1" class="col s12">
                        <div className="card">
                            <div className="card-content choicecard">
                                <span className="card-title choicetitle"><b>What is CP Visualiser?</b></span>
                                <p className="choicecontent">The Best Destination to check your competitve programming statistics.</p>
                                <p className="choicecontent yellow-text text-darken-4">NOTE: This website currently only supports 3 websites!</p>
                            </div>
                            
                        </div>

                    </div>
                    <div id="test2" class="col s12">
                    <div className="card">
                        <div className="card-content choicecard">
                            <span className="card-title choicetitle"><b>How to use it?</b></span>
                            <p className="choicecontent">Just go to any tab in navbar and enter your respective website username. </p>
                            <p className="choicecontent">That's it. you can see your stats from that website.</p>
                            <p className="choicecontent"> OR Just Select any website from Here to get started.</p>
                        </div>
                        <div className="card-action">
                            <NavLink to="/Home" className="blue-text text-darken-2">Codeforces</NavLink>
                            <NavLink to="/atcoder" className="blue-text text-darken-2">AtCoder</NavLink>
                            <NavLink to="/codechef" className="blue-text text-darken-2">CodeChef</NavLink>
                            </div>
                    </div>
                    </div>
                    <div id="test3" class="col s12">
                    <div className="card">
                        <div className="card-content choicecard">
                            <span className="card-title choicetitle"><b>Who is this for?</b></span>
                            <p className="choicecontent">if you have any account in any of the 3 programming websites, you can check your stats. </p>
                            <p className="choicecontent">or you can view other's account's stats too!!</p>
                        </div>
                    </div>
                    </div>
                    <div id="test4" class="col s12">
                    <div className="card">
                        <div className="card-content choicecard">
                            <span className="card-title choicetitle"><b>Support us!!</b></span>
                            <p className="choicecontent">You can go to our github repository and sponsor us or you can star the repo.</p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/srikar7777" className="blue-text text-darken-2">Github Repo</a>
                            
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="parallax2"></div>
                
                    
                
            </div>
        )
        
        
          

    }
    


}




export default Choices;













