import React from "react"
import data from "../assets/data"
import ProjectListItem from "./ProjectListItem"
import { backgroundColor, backgroundImages } from '../assets/background-images'

export function ProjectList() {
  return (
    <div className="project-list">
      {data.map(element => (
        <ProjectListItem
          key={element.id}
          id={element.id}
          name={element.name}
          short={element.short}
          description={element.description}
          link={element.link}
          img={element.imgFileName}
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImages[Math.floor(Math.random()*backgroundImages.length)]}/>
      ))}
    </div>
  )
}
