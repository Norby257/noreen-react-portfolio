import React from "react"
// import Project from "./Project"
// this will be similar to the Holiday project
//   in which we are going to render two columns of projects
//   and map over them
//   refactor this too, first and then map over what is neeeded

const ProjectList = () => {
return (


  <div>
    <div className="col-md-6"> COL 1 CONTENT GOES HERE </div>
    <div clasName="col-md-6"> COL 2 CONTENT GOES HERE </div>
  </div>
  )
}

export default ProjectList

//   keeping this commented out so that if  I need it in the future I can just grab it
// function ProjectList(props) {
//     return (
//        props.projects.map(function(project){
//            return <Project projects={projects} key={project.id} />
//        })
//     )

// }
