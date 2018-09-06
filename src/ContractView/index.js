import React, { Component } from "react";
import "./style.css";

class ContractView extends Component {
    render() {
        return (
            <div>
                <div className="contract-view">
                    <h1 className="heading">Preview</h1>
                    <h3 className="contract-title">SOFTWARE DEVELOPMENT AGREEMENT</h3>
                    <div className="preamble">
                        <span className="output freelance-name">{this.props.freelancerNameProps}</span>
                        ("Client") is hiring <span className="output client-name">{this.props.clientNameProps}</span>
                        ("Freelancer") to do freelance software development work.
                        The following sets forth the agreement between these two parties and binds them both.
                    </div>
                    <div className="clause-section">
                        <div className="clause-section-title">SCOPE OF WORK</div>
                        <div className="clause content">
                            Freelancer will do the following for Client (the "Scope of Work"):
                        <p className="output service-description">{this.props.serviceDescriptionProps}</p>
                            Freelancer may decline, or charge additionally for, work that Freelancer reasonably deems to be beyond this scope.
                        The final deadline for completing the work is <p className="output service-due-date">{this.props.serviceDueDateProps}</p>
                        </div>
                        <div className="clause-section-title">OWNERSHIP OF THE WORK</div>
                        <div className="clause content">
                        Freelancer hereby assigns to Client all right, title and interest 
                        in the work produced or developed under this agreement, including all patent, 
                        trade secret and trademark rights, and copyrights. 
                        This assignment is conditioned on Freelancer 
                        being paid the full amount owed under this agreement.
                        </div>
                        <div className="clause-section-title">PAYMENT</div>
                        <div className="clause content">
                        <p>Client will pay Freelancer a fee of: US$ <span className="output service-fee">{this.props.serviceFeeProps}</span></p>
                        <p>Client will pay Freelancer upon the following conditions:<span className="output service-fee">{this.props.paymentConditionsProps}</span></p>
                        </div>
                        

                    </div>




                </div>
            </div>
        )
    }
}

export default ContractView;