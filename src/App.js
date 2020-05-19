import React , {Component}from 'react';
import { fetchData } from "./api";
import Navbar from "./components/Navbar";
import PieChart1 from "./components/PieChart1";
import Test from "./components/Test";


class  App extends Component {
  state = {
    data :[]
  }
  async  componentDidMount(){
    const response = await fetchData();
    this.setState({data : response.data.result });
    
  }

  render(){
    return (
      <div className="App">
        <PieChart1 res={this.state.data}/>
        
        

      </div>
    );

  }
  
}

export default App;
