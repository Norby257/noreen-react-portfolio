import React from 'react'; 

function Book(props) {
    
        return (
            <li className="project-list-item">
            <div className="project">
              <div className="project-top">
              <div
                className="project-image"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${props.projects.imageLink})`
                }}
              />
              </div>
           
              <div className="project-name">{props.projects.name}</div>
              <div className="project-description"> {props.projects.description} </div>
              <span> {props.projects.githubURL} </span>
              <span> {props.projects.HerokuLink} </span>
            </div>
          </li>
        )
    

}

export default Project;