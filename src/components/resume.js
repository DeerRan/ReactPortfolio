import React from "react";
import resume from "../Assets/MyResume.pdf"

function Resume() {
    return (
        <div className="resumebody">
            <p>My Resume</p>

            <iframe 
                className="iframe"
                src= { resume }>
            </iframe>
        </div>
    );
}

export default Resume;