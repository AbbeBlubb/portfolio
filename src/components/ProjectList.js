import React from "react"
import projectData from "../assets/project-data"
import { ProjectListItem } from "./ProjectListItem"
import { backgroundColor, backgroundImages } from '../assets/background-images'

export function ProjectList(props) {
  return (
    <section 
      className="project-list"
      ref={props.refProp}> {/*Attatch the given ref to child */}
      {projectData.map(project => (
        <ProjectListItem
          key={project.id}
          id={project.id}
          name={project.name}
          short={project.short}
          description={project.description}
          linkUrl={project.linkUrl}
          linkText={project.linkText}
          img={project.imgFileName}
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImages[Math.floor(Math.random()*backgroundImages.length)]} />
      ))}
    </section>
  )
}
