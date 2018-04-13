import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Line from "./Line"
import data from "../data"
import "./project-list.css"
import ProjectDescription from "./Project-description";

class ProjectList extends React.Component {
  render() {
    return (
      <div className="project-list-main-container">
        <div className="project-list-container-for-background"></div>
        {data.map((element) => (
          <div key={element.id}>
            <div className="project-list-container-for-container">
            <Link to={`/${element.id}`}>
              <div className="project-list-container">
                <div className="project-list-name">{element.name}&nbsp;</div>
                <div className="project-list-short">/ {element.short}</div>
              </div>
            </Link>
            </div>
          </div>
        ))}
        <div className="project-list-container-for-background"></div>
      </div>
    )
  }
}

export default ProjectList