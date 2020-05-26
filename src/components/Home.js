import React , {Component} from "react";
import axios from "axios";
import Tables from "./Tables";
import PieChart1 from "./PieChart1";
import Levels from "./Levels";
import $ from  "jquery";

class Home extends Component {   
    componentDidMount(){
    //     $(window).load(function() {      //Do the code in the {}s when the window has loaded 
    //         $("#loader").fadeOut("fast");  //Fade out the #loader div
    //     });
    }
    state = {
        handle : "",
        url : "https://codeforces.com/api/user.status?handle=",
        data : []
    }
    setHandle =(e) =>{
        this.setState({handle : e.target.value})
    }

    sendHandle = async(e) =>{
        let initialstate = this.state.url;
        e.preventDefault()
        document.getElementById("loader").style.display="flex"
        const x = this.state.url + this.state.handle;
        this.setState({url : x})
        try{
            const response = await axios.get(this.state.url+this.state.handle);
            if(response !== undefined){
                this.setState({data : response.data.result });
                
            }   
            else
                document.write("there is no such user.");
            let xx=""
            this.setState({handle : xx})
            this.setState({url : initialstate })
            console.log(this.state)
            var unhide = document.getElementById("hidden");
            unhide.style.display = "block";

        }
        catch(error){
            document.getElementById("in").innerHTML="Please Enter Valid Username";
            document.getElementById("hidden").style.display="none";

        }
        document.getElementById("loader").style.display="none"
        
        
        
    }
    

    render(){ 
               
        return(
            <div className="Home">
                <form onSubmit={this.sendHandle}>
                    <input type="text"  className="validate" data-error="wrong" data-success="right"
                     placeholder="Enter your Codeforces handle"
                     onChange={this.setHandle}/>
                </form>
                <div id="loader" style= {{display:"none"}}>
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue">
                        <div class="circle-clipper left">
                        <div class="circle"></div>
                        </div><div class="gap-patch">
                        <div class="circle"></div>
                        </div><div class="circle-clipper right">
                        <div class="circle"></div>
                        </div>
                    </div>

                    <div class="spinner-layer spinner-red">
                        <div class="circle-clipper left">
                        <div class="circle"></div>
                        </div><div class="gap-patch">
                        <div class="circle"></div>
                        </div><div class="circle-clipper right">
                        <div class="circle"></div>
                        </div>
                    </div>

                    <div class="spinner-layer spinner-yellow">
                        <div class="circle-clipper left">
                        <div class="circle"></div>
                        </div><div class="gap-patch">
                        <div class="circle"></div>
                        </div><div class="circle-clipper right">
                        <div class="circle"></div>
                        </div>
                    </div>

                    <div class="spinner-layer spinner-green">
                        <div class="circle-clipper left">
                        <div class="circle"></div>
                        </div><div class="gap-patch">
                        <div class="circle"></div>
                        </div><div class="circle-clipper right">
                        <div class="circle"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <p className="flow-text" style={{color : "red"}} id ="in"></p>
                
                <div id="hidden" style={{display:"none"}}>
                    <PieChart1 res={this.state.data}/>
                    <br/>
                    <br/>
                    <br/>
                    <Levels res={this.state.data}/>
                    <br/>
                    <br/>
                    <br/>
                    <Tables res={this.state.data}/>
                </div>

                                    
            </div>        
        )
    }
}


export default Home; 