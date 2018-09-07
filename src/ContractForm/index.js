import React, { Component } from "react";
import "./style.css";
import ContractView from "../ContractView";
import moment from "moment";
import numeral from "numeral";

class ContractForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            freelancerName: JSON.parse(localStorage.getItem("freelancer-name")) || "Developer's complete name ",
            clientName: JSON.parse(localStorage.getItem("client-name")) ||"Client's complete name ",
            serviceDescription: JSON.parse(localStorage.getItem("service-description")) ||"Describe what the developer will do. Include any milestones.",
            serviceDueDate: JSON.parse(localStorage.getItem("service-duedate")) ||"",
            serviceFee: JSON.parse(localStorage.getItem("service-fee")) || 0.00,
            paymentConditions: JSON.parse(localStorage.getItem("payment-conditions")) || ' describe, eg. in two installments of 50%, the first due upon acceptance of this aggreement and the last upon delivery',
            earlyTermination: JSON.parse(localStorage.getItem("early-termination")) || "",
            stateLocation: JSON.parse(localStorage.getItem("state-location")) || "",
            executionDate: JSON.parse(localStorage.getItem("execution-date")) || "",
        }

    }
    handleChangeFreela = (event) => {
        let str = event.target.value
        this.setState({
            freelancerName: str.toUpperCase(),
        })
    }

    handleSubmitFreela = (event) => {


    }
    handleChangeClient = (event) => {
        let string = event.target.value
        this.setState({
            clientName: string.toUpperCase(),
        })
    }

    handleChangeService = (event) => {
        this.setState({
            serviceDescription: event.target.value,
        })
    }

    handleChangeServiceDueDate = (event) => {
        this.setState({
            serviceDueDate: event.target.value,
        })
    }

    handleChangeServiceFee = (event) => {
        this.setState({
            serviceFee: event.target.value,
        })
    }

    handleChangePaymentConditions = (event) => {
        this.setState({
            paymentConditions: event.target.value,
        })
    }

    handleChangeEarlyTermination = (event) => {
        this.setState({
            earlyTermination: event.target.value,
        })
    }

    handleChangeStateLocation = (event) => {
        this.setState({
            stateLocation: event.target.value,
        })
    }

    handleChangeExecutionDate = (event) => {
        this.setState({
            executionDate: event.target.value,
        })
    }



    saveChanges = (event) => {
        event.preventDefault();
        let freelancerName = `${this.state.freelancerName}`
        let clientName = `${this.state.clientName}`
        let serviceDescription = `${this.state.serviceDescription}`
        let serviceDueDate = `${this.state.serviceDueDate}`
        let serviceFee = `${this.state.serviceFee}`
        let paymentConditions = `${this.state.paymentConditions}`
        let earlyTermination = `${this.state.earlyTermination}`
        let stateLocation = `${this.state.stateLocation}`
        let executionDate = `${this.state.executionDate}`

        this.setState({

            freelancerName: `${this.state.freelancerName}`,
            serviceDescription: `${this.state.serviceDescription}`,
            clientName: `${this.state.clientName}`,
            serviceDueDate: `${this.state.serviceDueDate}`,
            serviceFee: `${this.state.serviceFee}`,
            paymentConditions: `${this.state.paymentConditions}`,
            earlyTermination: `${this.state.earlyTermination}`,
            stateLocation: `${this.state.stateLocation}`,
            executionDate: `${this.state.executionDate}`,
        })


        localStorage.setItem('freelancer-name', JSON.stringify(freelancerName));
        localStorage.setItem('client-name', JSON.stringify(clientName));
        localStorage.setItem('service-description', JSON.stringify(serviceDescription));
        localStorage.setItem('service-duedate', JSON.stringify(serviceDueDate));
        localStorage.setItem('service-fee', JSON.stringify(serviceFee));
        localStorage.setItem('payment-conditions', JSON.stringify(paymentConditions));
        localStorage.setItem('early-termination', JSON.stringify(earlyTermination));
        localStorage.setItem('state-location', JSON.stringify(stateLocation));
        localStorage.setItem('execution-date', JSON.stringify(executionDate));


    }






    render() {
        return (
            <div className="forms-wrapper">
                <div className="contract-form-wrapper">
                    <h1 className="heading">Create</h1>
                    <div className="input-container">
                        <div className="input-container-text freelancer-name">
                            <form onClick={this.handleSubmit}>
                                <label className="input-title">Freelancer's complete name</label>
                                <input
                                    className="title-input"
                                    placeholder="Freelancer complete name"
                                    freelancerName={this.state.value}
                                    onChange={this.handleChangeFreela}>
                                </input>

                                <label className="input-title">Client's complete name</label>
                                <input
                                    className="title-input"
                                    placeholder="Client's complete name"
                                    clientName={this.state.value}
                                    onChange={this.handleChangeClient}>
                                </input>

                                <label className="input-title">Service description</label>
                                <input
                                    className="title-input"
                                    placeholder="service description"
                                    serviceDescription={this.state.value}
                                    onChange={this.handleChangeService}>
                                </input>

                                <label className="input-title">Service due date</label>
                                <input
                                    className="title-input"
                                    type="date"
                                    placeholder="due date"
                                    serviceDueDate={this.state.value}
                                    onChange={this.handleChangeServiceDueDate}>
                                </input>

                                <label className="input-title">Service fee</label>
                                <input
                                    className="title-input"
                                    type="number"
                                    placeholder="$"
                                    serviceFee={this.state.value}
                                    onChange={this.handleChangeServiceFee}>
                                </input>

                                <label className="input-title">Payment conditions</label>
                                <input
                                    className="title-input"
                                    type="text"
                                    placeholder="specify the payment conditions"
                                    paymentConditions={this.state.value}
                                    onChange={this.handleChangePaymentConditions}>
                                </input>

                                <label className="input-title">Location</label>
                                <input
                                    className="title-input"
                                    type="text"
                                    placeholder="Which State are you based?"
                                    stateLocation={this.state.value}
                                    onChange={this.handleChangeStateLocation}>
                                </input>
                                <label className="title-input">Select an early termination clause:
                                    <select className="select-wrapper" earlyTermination={this.state.value} onChange={this.handleChangeEarlyTermination}>
                                        <option value=' any unpaid fees prorated for the portion of the work completed at the time of termination.'>Pro Rata Payment Clause</option>
                                        <option value=' liquidated damages in the amount of __________, which the parties agree represents fair compensation for the harm Freelancer would suffer from termination'>Liquidated Damages Clause</option>
                                    </select>
                                </label>
                                <label className="input-title">When is this contract being signed?</label>
                                <input
                                    className="title-input"
                                    type="date"
                                    placeholder="execution date"
                                    executionDate={this.state.value}
                                    onChange={this.handleChangeExecutionDate}>
                                </input>
                                <button
                                    
                                    className="create-contract"
                                    onClick={this.saveChanges}
                                    type="submit">
                                    Save Contract
                                </button>
                                <button
                                    className="create-contract"
                                    type="submit">
                                    Create Contract
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contract-view-wrapper">
                    <ContractView
                        freelancerNameProps={this.state.freelancerName}
                        clientNameProps={this.state.clientName}
                        serviceDescriptionProps={this.state.serviceDescription}
                        serviceDueDateProps={this.state.serviceDueDate}
                        serviceFeeProps={this.state.serviceFee}
                        paymentConditionsProps={this.state.paymentConditions}
                        earlyTerminationProps={this.state.earlyTermination}
                        stateLocationProps={this.state.stateLocation}
                        executionDateProps={this.state.executionDate}
                    />
                </div>
            </div>
        )
    }
}



export default ContractForm;
