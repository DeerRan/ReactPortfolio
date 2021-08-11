import React from "react";
import darren from "../Assets/darrenimg.png"

function Aboutme() {
    return (
        <div className="aboutmebody">
            <div id="aboutme" className="row sectioned justify-content-center">
                <div id='bio' className="col-10 col-lg-7">
                    <div>
                        <h2>Who I am?</h2>
                        <p>
                            I'm Darren! I am a college student who want to make a living out of coding. I am 20 years old at the time I wrote this and my hobbies include anything that lets me hang out with friends or meet new people. In my personal time I enjoy
                            playing video-games or spending time with friends or my significant other. I am friendly and easy to get along with and can adapt well in new environments!
                        </p>
                    </div>
                    <div>
                        <h2>Why did I make this page?</h2>
                        <p>
                            This page will hopefully showcase my future projects that I will work on or create in order to give employers an idea of whether or not I have the skills they are looking for. Currently I am not very far into my education for coding,
                            as a result this page will probably be very lacking in content for now.
                        </p>
                    </div>
                </div>

                <section className="selfie col-8 col-lg-3">
                    <img className="darrenpic" src={ darren } alt="A picture of Darren Scott"/>
                </section>
            </div>
        </div>
    );
}

export default Aboutme;