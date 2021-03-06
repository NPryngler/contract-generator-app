import React, { Component } from "react";
import "./style.css";

class Nav extends Component {
    render() {

        return (
            //code mostly from the react-spotify app presented by Mike Glumac
            //available at https://git.generalassemb.ly/wdi-nyc-peloton/react-spotify/blob/master/src/Nav/index.js 

            <nav className="nav">
                <a
                    className="contract-option"
                    href="#"
                    onClick={event => {
                        event.preventDefault();
                        this.props.setView('Dev Contract');
                    }}>
                    SOFTWARE DEVELOPMENT CONTRACT
            </a>
                <a
                    className="contract-option"
                    href="#"
                    onClick={event => {
                        event.preventDefault();
                        this.props.setView('Design Contract');
                    }}>
                    UX/DESIGN CONTRACT
            </a>
            </nav>
        )
    }
}

export default Nav;