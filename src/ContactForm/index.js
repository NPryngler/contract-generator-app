import React, { Component } from "react";
import "./style.css";

class ContactForm extends Component {
    render(){
        return (
            <div className="contact-form-wrapper">
            <h2>Give us your contract info to receive your finished contract</h2>
            <form>
                <label>Your full name
                    <input type="text" placeholder="name"></input>
                </label>
                <label>E-mail address
                    <input type="e-mail" placeholder="email"></input>
                </label>
                <button>Submit</button>
            </form>
            </div>
        )
    }
    
}

export default ContactForm;