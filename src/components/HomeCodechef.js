import React , {Component} from "react";
import axios from "axios";

class HomeCodechef extends Component {

    state={
        url : "https://competitive-coding-api.herokuapp.com/api/codechef/",
        data:[],
        handle:"",
    }
    setHandle =(e) =>{
        this.setState({handle : e.target.value})
    }

    sendHandle =async(e) =>{
        e.preventDefault()
        document.getElementById("loader").style.display="flex"
        const x = this.state.url + this.state.handle;
        this.setState({url : x})
        try{
            const response = await axios.get(this.state.url+this.state.handle);
            if(response !== undefined){
                this.setState({data : response.data });
            }
            console.log(this.state.data);
            document.getElementById("name").innerHTML=this.state.data.user_details.name;

        }
        catch(err){
            console.log(err);
        }
        document.getElementById("loader").style.display="none"
    }


    render(){
        const {data} = this.state;
        return(
            <div className="Homeform">
                <form onSubmit={this.sendHandle}>
                    <input type="text"  className="validate" data-error="wrong" data-success="right"
                     placeholder="Enter your Codechef handle"
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
                    <p className="flow-text" style={{color : "red"}} id ="in"></p>
                    
            </div>
        )
    }

}  

export default HomeCodechef;
