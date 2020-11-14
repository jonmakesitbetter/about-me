import React from "react";
import "./project.css";


const Project = (props) => {
  return (
    <div class="row">
      <div class="col-md-5">

          <div className="card project-card">
            <div className="img-container">
              <a href={props.siteLink}><strong>{props.name}</strong></a>
              <img class="project-image" alt={props.name} src={props.image} />
            </div>
            <div className="content">
                  <a href={props.github}><strong>{props.name}'s Github repository</strong></a>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Project;

//props page to be rendered multiple times on a page
