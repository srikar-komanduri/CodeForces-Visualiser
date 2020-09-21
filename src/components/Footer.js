import React from "react"
import Choices from "./Choices";
import Home from "./Home";
import HomeAtcoder from "./HomeAtcoder";
import HomeCodechef from "./HomeCodechef";
import { Route, BrowserRouter,Link,NavLink } from 'react-router-dom'

const Footer = (props) =>{    
    return(
        <footer className="page-footer purple darken-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Thank you for visiting our page</h5>
                <p className="grey-text text-lighten-4">Any advice is appreciated. feel free to raise issue in github repository if required.</p>
                <p className="grey-text text-lighten-4">You can also fork this project and create a pull request.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links to coding websites</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://codeforces.com/">CodeForces</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://codechef.com/">Codechef</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://atcoder.jp/">Atcoder</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container inline">
            © 2020 Made by Komanduri Srikar , Jami Deepesh , Raghavan.  
            <a href="#" className="fa fa-facebook"></a>
            &nbsp;	&nbsp;	&nbsp;
            <a href="#" className="fa fa-twitter"></a>
            &nbsp;	&nbsp;	&nbsp; &nbsp;
            <a href="#" className="fa fa-google"></a>
            &nbsp;	&nbsp;	&nbsp;
            
            <a className="grey-text text-lighten-4 right" href="https://github.com/srikar7777/CodeForces-Visualiser">Github repository</a>
            </div>
          </div>
        </footer>
    )



}

export default Footer