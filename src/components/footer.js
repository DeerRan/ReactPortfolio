import React from "react";
import github from "../Assets/github.png"
import linkedin from "../Assets/linkedin.png"
import email from "../Assets/email.jpg"

function Footer() {
return (
    <div className="footer" style={{ backgroundColor: "black" }}>
        <div className="row justify-content-center">
            <a className="col-1" rel="noreferrer" href="https://github.com/DeerRan" target="_blank">
            <img className="logos" src= { github } />
            </a>

            <a className="col-1" rel="noreferrer" href="https://www.linkedin.com/in/DeerRan" target="_blank">
            <img className="logos" src= { linkedin } />
            </a>

            <a className="col-1" rel="noreferrer" href="mailto:Darren.Scott.0905@gmail.com" target="_blank">
            <img className="logos" src= { email } />
            </a>
            <p className="col-1 num">612-834-1808</p>
        </div>
    </div>
)};

export default Footer;