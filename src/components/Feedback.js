import React , {Component} from "react";


class Feedback extends Component {

    state={
        fb1:"",
        fb2:"",
        fb3:"",
    }

     required=(e)=>{
        //e.preventDefault()
        var empt = document.forms['f1']['t1'].value;
        if (empt == "")
        {
            alert("Enter valid email id");
            document.getElementById("in1").style.display="none";
            return false;
        }
        else{
            document.getElementById("in1").innerHTML="feedback taken! you will get a reply soon ";
            
        }

        
    }
    required2=(e)=>{
        //e.preventDefault()
        var empt = document.forms['f2']['t2'].value;
        if (empt == "")
        {
            alert("Enter valid email id");
            document.getElementById("in2").style.display="none";
            return false;
        }
        else{
            document.getElementById("in2").innerHTML="feedback taken! you will get a reply soon ";
        }
    }
    required3=(e)=>{
        //e.preventDefault()
        var empt = document.forms['f3']['t3'].value;
        if (empt == "")
        {
            alert("Enter valid email id");
            document.getElementById("in3").style.display="none";
            return false;
        }
        else{
            document.getElementById("in3").innerHTML="feedback taken! you will get a reply soon ";
        }
    }
    

    set_fb=(e)=>{
        this.setState({fb1 : e.target.value})  
    } 
    set_fb2=(e)=>{
        this.setState({fb2 : e.target.value})  
    }
    set_fb3=(e)=>{
        this.setState({fb3 : e.target.value})  
    }  
    render(){
        return(
            <div className="Homeform">
                 <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title choicetitle">Give Feedback</span>
                    <p>Got some Suggestions? Found Some Bug? want to recommend new feature? 
                    Whatever may be the case, just fill one simple form.
                     and we will reply as soon as possible! </p>
                    </div>
                </div>

                
                    <h2>Select any option</h2>
                    <br/>
                    
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#home">Found a bug</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu5">New feature</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu6">Suggestion</a>
                        </li>
                       
                    </ul>

                    
                    <div class="tab-content">
                        <div id="home" class="container tab-pane active"><br/>
                        <h3>Fill this simple form to report the bug</h3>
                        <div>
                        <form name="f1" onSubmit={this.required}>
                            <textarea  type="textarea" className="form-control mb-2 mr-sm-2" 
                            placeholder="Describe that bug" onChange={this.set_fb}/>
                            <br/>
                            <input name="t1" type="email" placeholder="Enter your email id" /><br/><br/>
                            <label>
                                <input type="checkbox" />
                                <span>Send a copy of responses to my email</span>
                            </label><br/><br/>
                            <input className="btn" type="submit" value="Submit"/><br/>
                            <p className="flow-text" style={{color : "green"}} id ="in1"></p>
                            
                        </form>
                            
                        </div>
                        
                        </div>
                        <div id="menu5" class="container tab-pane fade"><br/>
                        <h3>Fill this simple form to recommend the feature</h3>
                        <div>
                        <form name="f2" onSubmit={this.required2}>
                            <textarea  type="textarea" className="form-control mb-2 mr-sm-2" 
                            placeholder="Describe that feature!" onChange={this.set_fb2}/>
                            <br/>
                            <input name="t2" type="email" placeholder="Enter your email id" /><br/><br/>
                            <label>
                                <input type="checkbox" />
                                <span>Send a copy of responses to my email</span>
                            </label><br/><br/>
                            <input className="btn" type="submit" value="Submit"/><br/>
                            <p className="flow-text" style={{color : "green"}} id ="in2"></p>
                            
                        </form>
                        </div>
                        
                        </div>
                        <div id="menu6" class="container tab-pane fade"><br/>
                        <h3>Fill this simple form to give your suggestion</h3>
                        <div>
                        <form name="f3" onSubmit={this.required3}>
                            <textarea  type="textarea" className="form-control mb-2 mr-sm-2" 
                            placeholder="Describe that suggestion" onChange={this.set_fb3}/>
                            <br/>
                            <input name="t3" type="email" placeholder="Enter your email id" /><br/><br/>
                            <label>
                                <input type="checkbox" />
                                <span>Send a copy of responses to my email</span>
                            </label><br/><br/>
                            <input className="btn" type="submit" value="Submit"/><br/>
                            <p className="flow-text" style={{color : "green"}} id ="in3"></p>
                            
                        </form>
                        </div>
                        </div>
                        
                    
                </div><br/> 
                
            </div>
        )
    }

}  


export default Feedback;