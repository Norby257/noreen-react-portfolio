import React from 'react'; 

function ProjectList(props) {
    return (
       props.projects.map(function(project){
           return <Project projects={projects} key={project.id} />
       })
    )

}


export default ProjectList
