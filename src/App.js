import React , {Component}from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


class  App extends Component {
  
  render(){
    return (
      <div className="">
        <Navbar/>
        <div className="App"></div>
        <br/><br/><br/>
        <Footer/>
      </div>
    );
  }  
}

export default App;
