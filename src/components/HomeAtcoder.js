import React , {Component} from "react";
import axios from "axios";
import Tables3 from "./Tables3";
import PieChart3 from "./PieChart3";
import Levels from "./Levels";


class HomeAtcoder extends Component {   
    
    state = {
        handle : "",
        url : "https://codeforces.com/api/user.status?handle=",
        data : [],
        url2 : "https://codeforces.com/api/user.info?handles=",
        data2 : [],
        url3 : "https://codeforces.com/api/user.rating?handle="

    }
    setHandle =(e) =>{
        this.setState({handle : e.target.value})
    }

    sendHandle = async(e) =>{
        let initialurl = this.state.url;
        let initialurl2 = this.state.url2;
        e.preventDefault()
        document.getElementById("loader").style.display="flex"
        const x = this.state.url + this.state.handle;
        this.setState({url : x})
        try{
            const response = await axios.get(this.state.url+this.state.handle);
            if(response !== undefined){
                this.setState({data : response.data.result });
            }   
            
            this.setState({url : initialurl })
            var unhide = document.getElementById("hidden");
            unhide.style.display = "block";
            document.getElementById("in2").style.display="none";

        }
        catch(error){
            //document.getElementById("in2").innerHTML="Please Enter Valid Username";
            //document.getElementById("hidden").style.display="none";

        }
        try{
            const response2 = await axios.get(this.state.url2+this.state.handle)
            
            //this.setState({url2 : initialurl2 })
            const url2setter = this.state.url2 + this.state.handle;
            this.setState({url2 : url2setter})
            var unhide = document.getElementById("hidden");
            unhide.style.display = "block";
            let xxx=""
            this.setState({handle : xxx})
            this.setState({data2 : response2.data.result[0]});
            this.setState({url2 : initialurl2 })
            document.getElementById("in2").style.display="none";
            
        }
        catch(error){
            document.getElementById("in2").innerHTML="Please Enter Valid Username";
            document.getElementById("hidden").style.display="none";
        }
        document.getElementById("loader").style.display="none"
        
        
        
    }
    

    render(){ 
        const {data,data2,handle} = this.state;
        const Welcome="Welcome";
        let username=data2.handle;
        if(data2.firstName && data2.lastName){
            username = data2.firstName+" "+data2.lastName;
        }
        let data_length = data.length;
          
        //var date = new Date(1324339200000);
        
        //console.log(date.toDateString("MMM dd"));
        return(
            <div className="Homeform">
                <h3>Enter your Atcoder handle down below</h3>
                <form onSubmit={this.sendHandle}>
                    <input type="text"  className="validate" data-error="wrong" data-success="right"
                     placeholder="Ex : srikar777"
                     onChange={this.setHandle}/>
                </form>
    
                <div id="loader" style= {{display:"none"}}>
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-red">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-yellow">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-green">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <p className="flow-text" style={{color : "red"}} id ="in2"></p>
                
                <div id="hidden" style={{display:"none"}}>
                    <p className="flow-text welcomecolor">
                    {Welcome}  {username}</p>
                    
                    
                    <PieChart3 res={data}/>
                    <br/>
                    <br/>
                    <br/>
                    <Levels res={data}/>
                    <br/>
                    <br/>
                    <br/>
                    <Tables3 res={data} name={handle} data2={data2}/>
                </div>

                                    
            </div>        
        )
    }
}


export default HomeAtcoder; 