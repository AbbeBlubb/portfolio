import React from "react"
import { ProjectTextArea } from "./ProjectTextArea";
import { ProjectImageArea } from "./ProjectImageArea";


export function ProjectDescription(props) {
  return (
    <div className="project-description">

      <ProjectImageArea
          src={require(`../assets/project-images/${props.img}`)}/>

      <ProjectTextArea
          name={props.name}
          description={props.description}
          linkUrl={props.linkUrl}
          linkText={props.linkText}/>
          
    </div>
  )
}
