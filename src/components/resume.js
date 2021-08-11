import React from "react";
import resume from "../Assets/MyResume.pdf"

function Resume() {
    return (
        <div className="resumebody">
            <a className="link" target="_blank" href= { resume }>
                <p>My Resume</p>
            </a>

            <div className="skillsdiv">
                <h1>My Skills</h1>
                <p>React | JavaScript | HTML5 | Github | Bootstrap | NodeJS | Express | CSS</p>
            </div>
        </div>
    );
}

export default Resume;