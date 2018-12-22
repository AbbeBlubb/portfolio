import React from "react"
import { ProjectTextArea } from "./ProjectTextArea";
import { ProjectImageArea } from "./ProjectImageArea";


export function ProjectDescription(props) {

  return (
      <div className={`project-description ${props.projectIsVisible && 'project-description--visible'}`}>
        <div className="project-description__inner">
    
          <ProjectImageArea
              src={require(`../assets/project-images/${props.img}`)}/>
    
          <ProjectTextArea
              name={props.name}
              description={props.description}
              href={props.link}/>
  
        </div>
      </div>
  )
}
