import React from "react";
import workarray from "./workarray"
import primary from "../Assets/TravelBlogDemo.gif"
import weather from "../Assets/weatherdash.png"
import findpet from "../Assets/findpet.png"
import commerce from "../Assets/commercebackend.png"
import techblog from "../Assets/techblog.png"

let photos = [primary, weather, findpet, commerce, techblog]

export function Workmap() {
    return workarray.map((works, i) => {
        return(
            <div className="col-10 col-lg-5">
                <a id="subwork" rel="noreferrer" href='https://deerran.github.io/WeatherDashboard/' target='_blank'>
                    <div id="secondary">
                        <img className="images" src= { photos[i] } />

                        <div className="overlay">
                            <h3 className="overlayh3"> { works.name } </h3>
                            <p className="overlayp">{ works.p }</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    })
};

//Nice triangle shape