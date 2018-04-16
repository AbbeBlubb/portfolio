import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import data from "../data"
import "./project-list.css"

class ProjectList extends React.Component {
  render() {
    return (
      <div className="pl-main" id="pl-main">
        <div className="pl-empty"></div>
        {data.map((element) => (
          <div key={element.id}>
            <div className="pl">
            <Link to={`/${element.id}`}>
              <div className="container">
                <div className="pl-name">{element.name}</div>
                <div className="pl-short">/ {element.short}</div>
              </div>
            </Link>
            </div>
          </div>
        ))}
        <div className="pl-empty"></div>
      </div>
    )
  }
}

export default ProjectList