import React, { Component } from "react";
import "./style.css";
import ContractForm from "../ContractForm";
import ContractView from "../ContractView";


class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <h1 className="heading">Create your freelance contract</h1>
      </div>
      <div className="main-wrapper">
        <ContractForm className="wrapper-contract-form"/>
        <ContractView className="wrapper-contract-view"/>
      </div>
    </div>
    )
  }
}

export default App;
