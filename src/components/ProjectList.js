import React from "react"
import projectData from "../assets/project-data"
import ProjectListItem from "./ProjectListItem"
import { backgroundColor, backgroundImages } from '../assets/background-images'

export function ProjectList() {
  return (
    <div className="project-list">
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
    </div>
  )
}
