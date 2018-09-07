import React, { Component } from "react";
import "./style.css";
import ContractForm from "../ContractForm";
import moment from "moment";
import Nav from "../Nav";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: 'Contract Form',
    }
  }
  setView = view => {
    this.setState({
      currentView: view
    })
  }

  render() {
    
    return (
    <div>
      <div className="App">
        <h1 className="heading">Create your freelance contract</h1>
      </div>
      <Nav setView={this.setView} />
      <div className="main-wrapper">
        <ContractForm 
        currentViewProps={this.state.currentView}
        setViewProps={this.setView}/>
        {/* <ContractView /> */}
      </div>
    </div>
    )
  }
}

export default App;
