import React from "react"
import "./projectdescription.css"

class ProjectDescription extends React.Component {

  render() {
      return (
        <div className="pd-main">
          <div className="pd-project">
            <div className="container-img">
              <div className="pd-img-wrap">
                <img className="pd-img" src={require("../img/" + this.props.img)} />
              </div>
            </div>
            <div className="container-text">
              <div className="pd-header-wrap">
                <div className="pd-header">{this.props.name}</div>
              </div>
              <div className="pd-description-wrap">
                <div className="pd-description">{this.props.description}</div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default ProjectDescription