import React from "react";

function Work() {
    return (
        <div className="workbody">
            <div>
                <h2>My Work</h2>
            </div>

            <a id="mainwork" class="col-10" href='https://github.com/atn362/crud_project/tree/Darren/branch' target='_blank'>
                <div id="primary">
                    <img class="images" src="/assets/images/TravelBlogDemo.gif" />

                    <div class="overlay">
                        <h3 class="overlayh3">Travel Blog</h3>
                        <p class="overlayp">A team project Travel Blog. I worked on the front-end</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Work;