import React from "react"
import data from "../data"
import "./project-description.css"

class ProjectDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = { project: null }
  }

  componentDidMount() {
    this.fetchProject()
  }

  fetchProject(){
    const project = data.find((project) => (
      project.id === this.props.match.params.projectId
    ));

    this.setState({
      project
    })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.projectId !== this.props.match.params.projectId){
      this.fetchProject()
    }
  }

  render() {
    if (this.state.project) {
      return (
        <div className="project-description-main-container">
          <div className="project-description-main-container-2">
            <div className="project-description-container-for-img">
              <div className="project-description-img-wrap">
                <img className="project-description-img" src={require("../img/" + this.state.project.imgFileName)} />
              </div>
            </div>
            <div className="project-description-container-for-text">
              <div className="project-description-header-wrap">
                <div className="project-description-header">{this.state.project.name}</div>
              </div>
              <div className="project-description-description-wrap">
                <div className="project-description-description">{this.state.project.description}</div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>Loading project..</div>
      )
    }
  }
}

export default ProjectDescription