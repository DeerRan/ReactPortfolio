import React from "react";
import primary from "../Assets/MainProject.png"
import weather from "../Assets/weatherdash.png"
import findpet from "../Assets/findpet.png"
import commerce from "../Assets/commercebackend.png"
import techblog from "../Assets/techblog.png"


function Work() {
    return (
        <div className="workbody">
            <div className="row sectioned justify-content-center">    
 
                <a id="mainwork" class="col-10" href='https://github.com/atn362/crud_project/tree/Darren/branch' target='_blank'>
                    <div id="primary">
                        <img class="images" src= { primary }/>

                        <div class="overlay">
                            <h3 class="overlayh3">Travel Blog</h3>
                            <p class="overlayp">A team project Travel Blog. I worked on the front-end</p>
                        </div>
                    </div>
                </a>

                <a class="col-6 col-lg-6" id="subwork" href='https://deerran.github.io/WeatherDashboard/' target='_blank'>
                    <div id="secondary">
                        <img class="images" src={ weather } />

                        <div class="overlay">
                            <h3 class="overlayh3">WeatherDashboard</h3>
                            <p class="overlayp">A weather forecasting webpage</p>
                        </div>
                    </div>
                </a>

                <a class="col-6 col-lg-4" id="subwork" href='https://old-prego.github.io/pet-adoption/' target='_blank'>
                    <div id="secondary">
                        <img class="images" src={ findpet } />
                        
                        <div class="overlay">
                            <h3 class="overlayh3">Petfinder</h3>
                            <p class="overlayp">A website for finding pets</p>
                        </div>
                    </div>
                </a>

                <a class="col-6 col-lg-4" id="subwork" href='https://github.com/DeerRan/E-commerceBackend' target='_blank'>
                    <div id="secondary">                    
                        <img class="images" src={ commerce } />

                        <div class="overlay">
                            <h3 class="overlayh3">E-commerce Backend</h3>
                            <p class="overlayp">A backend that demonstrates technologies I learned</p>
                        </div>
                    </div>
                </a>
                
                <a class="col-6 col-lg-4" id="subwork" href='https://github.com/DeerRan/TechBlog' target='_blank'>
                    <div id="secondary">                    
                        <img class="images" src={ techblog } />

                        <div class="overlay">
                            <h3 class="overlayh3">Techblog</h3>
                            <p class="overlayp">A functioning Techblog that demonstrates technologies I learned</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Work;