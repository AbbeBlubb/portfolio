import React from "react"
import data from "../data"

class ProjectDescription extends React.Component {

  constructor(props) {
    super(props)
    this.state = { project: null }
  }

  componentDidMount() {
    this.fetchProject()
  }

  fetchProject(){
    const project = data.find((project) => (
      project.id === this.props.match.params.projectId
    ))

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
        <div>
          <h2>{this.state.project.name}</h2>
          <p>{this.state.project.description}</p>
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