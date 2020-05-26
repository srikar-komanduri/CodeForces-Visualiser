import React , {Component}from 'react';
import Navbar from "./components/Navbar";
import PieChart1 from "./components/PieChart1";
import Home from "./components/Home";



class  App extends Component {
  
  render(){
    return (
      <div className="">
        <Navbar/>
        <div className="App">
          <Home/>  
          
        </div>
      </div>
    );
  }  
}

export default App;
