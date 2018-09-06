import React, { Component } from "react";
import "./style.css";
import ContractView from "../ContractView";
import moment from "moment";
import numeral from "numeral";

class ContractForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            freelancerName: "",
            clientName: "",
            serviceDescription: "",
            serviceDueDate: "",
            serviceFee: numeral.defaultFormat('$0,0.00'),
            paymentConditions: "",
            expenses
        }

    }
    handleChangeFreela = (event) => {
        this.setState({
            freelancerName: event.target.value,
        })
    }
    handleChangeClient = (event) => {
        this.setState({
            clientName: event.target.value,
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


    render() {
        return (
            <div className="forms-wrapper">
                <div className="contract-form-wrapper">
                    <h1 className="heading">Create</h1>
                    <div className="input-container">
                        <div className="input-container-text freelancer-name">
                            <form onClick={this.handleSubmit}>
                                <h4 className="input-title">Freelancer's complete name</h4>
                                <input 
                                className="title-input" 
                                placeholder="Freelancer complete name" 
                                freelancerName={this.state.value} 
                                onChange={this.handleChangeFreela}>
                                </input>
                                <h4 className="input-title">Client's complete name</h4>
                                <input 
                                className="title-input" 
                                placeholder="Client's complete name" 
                                clientName={this.state.value} 
                                onChange={this.handleChangeClient}>
                                </input>
                                <h4 className="input-title">Service description</h4>
                                <input 
                                className="title-input" 
                                placeholder="service description" 
                                serviceDescription={this.state.value} 
                                onChange={this.handleChangeService}>
                                </input>
                                <h4 className="input-title">Service due date</h4>
                                <input 
                                className="title-input"
                                type="date" 
                                placeholder="due date" 
                                serviceDueDate={this.state.value} 
                                onChange={this.handleChangeServiceDueDate}>
                                </input>
                                <h4 className="input-title">Service fee</h4>
                                <input 
                                className="title-input"
                                type="number" 
                                placeholder="$" 
                                serviceFee={this.state.value} 
                                onChange={this.handleChangeServiceFee}>
                                </input>
                                <h4 className="input-title">Payment conditions</h4>
                                <input 
                                className="title-input"
                                type="text" 
                                placeholder="specify the payment conditions" 
                                paymentConditions={this.state.value} 
                                onChange={this.handleChangePaymentConditions}>
                                </input>
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
                    />
                </div>
            </div>
        )
    }
}



export default ContractForm;
