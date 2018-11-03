import React from 'react'; 
import Project from './Project';
function ProjectList(props) {
    return (
       props.projects.map(function(project){
           return <Project projects={projects} key={project.id} />
       })
    )

}


export default ProjectList
