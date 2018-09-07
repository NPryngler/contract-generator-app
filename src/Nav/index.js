import React, { Component } from "react";
import "./style.css";

class Nav extends Component {
    render() {
        return (
            //code mostly from the react-spotify app presented by Mike Glumac
            //available at https://git.generalassemb.ly/wdi-nyc-peloton/react-spotify/blob/master/src/Nav/index.js 

            <nav className="nav">
                <a
                    href="#"
                    onClick={event => {
                        event.preventDefault();
                        this.props.setView('Dev Contract');
                    }}>
                    Software Development Contract
            </a>
                <a
                    href="#"
                    onClick={event => {
                        event.preventDefault();
                        this.props.setView('Design Contract');
                    }}>
                    UX/Design Contract
            </a>
            </nav>
        )
    }
}

export default Nav;