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
    }


    render(){
        const {data} = this.state;
        return(
            <div>
                <form onSubmit={this.sendHandle}>
                    <input type="text"  className="validate" data-error="wrong" data-success="right"
                     placeholder="Enter your Codechef handle"
                     onChange={this.setHandle}/>
                </form>
                <p id="name"></p>
            </div>
        )
    }

}  

export default HomeCodechef;
