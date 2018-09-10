import React, { Component } from "react";
import "./style.css";
import ContractDevForm from "../ContractDevForm";
import moment from "moment";
import Nav from "../Nav";
// import FinishedContract from "../FinishedContract";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Dev Contract',
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
          <div className="header-container">
            <h1 className="heading">Create your freelance contract in 3 simple steps</h1>
            <h3 className="subtitle">1. Choose your contract template.</h3>
            <div className="nav-container">
              <Nav
                setView={this.setView} />
            </div>
            <h3 className="subtitle">2.Just type the contract info on the left and check how your contract will be on the right side of the screen.</h3>
          </div>
        </div>
        
        <div className="main-wrapper">
          <ContractDevForm
            currentViewProps={this.state.currentView}
            setViewProps={this.setView} />
          {/* <ContractView /> */}

        </div>

        {/* <FinishedContract /> */}
      </div>
    )
  }
}

export default App;
