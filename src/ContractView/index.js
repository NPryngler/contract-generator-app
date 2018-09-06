import React, { Component } from "react";
import "./style.css";

class ContractView extends Component {
    render() {
        return (
            <div>
                <div className="contract-view">
                    <h1 className="heading">Preview</h1>
                    <h3 className="contract-title">SOFTWARE DEVELOPMENT AGREEMENT</h3>
                    <div className="clause-content">
                        <p><span className="output freelance-name">{this.props.clientNameProps}</span>
                            ("Client") is hiring </p>
                        <p><span className="output client-name">{this.props.freelancerNameProps}</span>
                            ("Freelancer") to do freelance software development work.</p>
                        <p>The following sets forth the agreement between these two parties and binds them both.</p>
                    </div>
                    <div className="clause-section">
                        <div className="clause-section-title">SCOPE OF WORK</div>
                        <div className="clause-content">
                            <p>Freelancer will do the following for Client (the "Scope of Work"):</p>
                            <p className="output service-description">{this.props.serviceDescriptionProps}</p>
                            <p>Freelancer may decline, or charge additionally for, work that Freelancer reasonably deems to be beyond this scope.</p>
                            <p>The final deadline for completing the work is <span className="output service-due-date">{this.props.serviceDueDateProps}</span>.</p>
                        </div>
                        <div className="clause-section-title">OWNERSHIP OF THE WORK</div>
                        <div className="clause-content">
                            <p>Freelancer hereby assigns to Client all right, title and interest
                                in the work produced or developed under this agreement, including all patent,
                                trade secret and trademark rights, and copyrights.
                                This assignment is conditioned on Freelancer
                            being paid the full amount owed under this agreement.</p>
                        </div>
                        <div className="clause-section-title">PAYMENT</div>
                        <div className="clause-content">
                            <p>The Client will pay the Freelancer a fee of: US$ <span className="output service-fee">{this.props.serviceFeeProps}</span></p>
                            <p>The Client will pay the Freelancer upon the following conditions:<span className="output service-fee">{this.props.paymentConditionsProps}</span></p>
                            <p>Upon completion of the work, the Freelancer will invoice Client for any amount due. Payment is due in __________, or as specified in the invoice.</p>
                            <p>Any amount not received by its due date will collect interest at the Prompt Payment Insterest Rate provided by the Department of Treasury.</p>
                        </div>
                        <div className="clause-section-title">CONFIDENTIAL INFORMATION</div>
                        <div className="clause-content">
                            <p>Any information supplied by one party to the other marked as "Confidential" must be used only for the purposes of this agreement and must not be disclosed to other parties without the discloser's written consent. This does not apply to information that is publicly available or that the recipient already properly knew, developed or received independently. When the agreement terminates, Freelancer must return to Client any materials containing confidential information. Confidentiality obligations survive termination of this agreement.</p>
                        </div>

                        <div className="clause-section-title">MISCELLANEOUS</div>
                        <div className="clause-content">
                            <p>This agreement is between Client and Freelancer and neither is allowed to delegate, transfer or assign it to a third party without the written consent of the other.
                            </p>
                            <p>This is the parties' entire agreement on this matter, superseding all previous negotiations or agreements. It can only be changed by mutual written consent.</p>

                            <p>The laws of the state of <span className="output state-location">{this.props.stateLocationProps}</span> govern this agreement and any disputes arising from it must be handled exclusively in courts in that state. The prevailing party in any dispute will be entitled to recover reasonable costs and attorneys' fees.</p>
                            <p>Signing a copy of this agreement, physical or electronic, will have the same effect as signing an original.</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ContractView;