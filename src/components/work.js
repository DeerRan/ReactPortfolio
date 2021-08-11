import React from "react";
import primary from "../Assets/TravelBlogDemo.gif"
import weather from "../Assets/weatherdash.png"
import findpet from "../Assets/findpet.png"
import commerce from "../Assets/commercebackend.png"
import techblog from "../Assets/techblog.png"
import { Workmap } from "./project.js"

function Work() {
    return (
        <div className="workbody">
            <div className="row sectioned justify-content-center">    
 
                <a id="mainwork" className="col-10" rel="noreferrer" href='https://github.com/atn362/crud_project/tree/Darren/branch' target='_blank'>
                    <div id="primary">
                        <img className="images" src= { primary }/>

                        <div className="overlay">
                            <h3 className="overlayh3">Travel Blog</h3>
                            <p className="overlayp">A team project Travel Blog. I worked on the front-end</p>
                        </div>
                    </div>
                </a>

                <Workmap />
                {/* <a className="col-10 col-lg-5" id="subwork" rel="noreferrer" href='https://deerran.github.io/WeatherDashboard/' target='_blank'>
                    <div id="secondary">
                        <img className="images" src={ weather } />

                        <div className="overlay">
                            <h3 className="overlayh3">WeatherDashboard</h3>
                            <p className="overlayp">A weather forecasting webpage</p>
                        </div>
                    </div>
                </a>

                <a className="col-10 col-lg-5" id="subwork" rel="noreferrer" href='https://old-prego.github.io/pet-adoption/' target='_blank'>
                    <div id="secondary">
                        <img className="images" src={ findpet } />
                        
                        <div className="overlay">
                            <h3 className="overlayh3">Petfinder</h3>
                            <p className="overlayp">A website for finding pets</p>
                        </div>
                    </div>
                </a>

                <a className="col-10 col-lg-5" id="subwork" rel="noreferrer" href='https://github.com/DeerRan/E-commerceBackend' target='_blank'>
                    <div id="secondary">                    
                        <img className="images" src={ commerce } />

                        <div className="overlay">
                            <h3 className="overlayh3">E-commerce Backend</h3>
                            <p className="overlayp">A backend that demonstrates technologies I learned</p>
                        </div>
                    </div>
                </a>
                
                <a className="col-10 col-lg-5" id="subwork" rel="noreferrer" href='https://github.com/DeerRan/TechBlog' target='_blank'>
                    <div id="secondary">                    
                        <img className="images" src={ techblog } />

                        <div className="overlay">
                            <h3 className="overlayh3">Techblog</h3>
                            <p className="overlayp">A functioning Techblog that demonstrates technologies I learned</p>
                        </div>
                    </div>
                </a> */}
            </div>
        </div>
    );
}

export default Work;