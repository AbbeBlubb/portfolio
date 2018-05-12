import React from "react"
import "./projectdescription.css"

class ProjectDescription extends React.Component {

  render() {
    return (
      <div className="pd">
        <div className="project">
          <div className="img-container">
            <div className="img-wrap">
              <img
                className="img"
                src={require(`../img/${this.props.img}`)}
                alt="Project" />
            </div>
          </div>
          <div className="text">
            <div>
              <div className="header">
                {this.props.name}
              </div>
            </div>
            <div>
              <div>
                {this.props.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription
