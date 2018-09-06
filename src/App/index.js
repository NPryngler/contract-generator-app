import React, { Component } from "react";
import "./style.css";
import ContractForm from "../ContractForm";
import moment from "moment";

class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <h1 className="heading">Create your freelance contract</h1>
      </div>
      <div className="main-wrapper">
        <ContractForm />
        {/* <ContractView /> */}
      </div>
    </div>
    )
  }
}

export default App;
