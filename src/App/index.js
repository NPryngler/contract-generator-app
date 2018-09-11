import React, { Component } from "react";
import "./style.css";
import ContractDevForm from "../ContractDevForm";
import ContractDesForm from "../ContractDesForm";
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
            <h3 className="subtitle"><span className="step">1.</span>Choose your contract template.</h3>
            <div className="nav-container">
              <Nav
                setView={this.setView} />
            </div>
            <h3 className="subtitle"><span className="step">2.</span>Just type the contract info on the left and check how your contract will be on the right side of the screen.</h3>
          </div>
        </div>

        {this.state.currentView === 'Dev Contract' && (
        <div className="main-wrapper">
          <ContractDevForm
            currentViewProps={this.state.currentView}
            setViewProps={this.setView} />
          {/* <ContractView /> */}

        </div>
        )}

        {this.state.currentView === 'Design Contract' && (
        <div className="main-wrapper">
          <ContractDesForm
            currentViewProps={this.state.currentView}
            setViewProps={this.setView} />
          {/* <ContractView /> */}

        </div>
        )}
        {/* <FinishedContract /> */}
      </div>
    )
  }
}

export default App;
