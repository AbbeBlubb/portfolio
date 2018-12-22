import React from "react"
import { ProjectStrip } from "./ProjectStrip";
import { ProjectDescription } from "./ProjectDescription"

export default class ProjectListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projectIsVisible: false
    }
  }

  toggleProject = () => {
    this.setState({
      projectIsVisible: !this.state.projectIsVisible
    })
  }

  render() {
    return (
      <div
          className="project-list-item"
          onClick={this.toggleProject}>
  
        <ProjectStrip
            name={this.props.name}
            short={this.props.short}/>
  
        <ProjectDescription
            projectIsVisible={this.state.projectIsVisible}
            name={this.props.name}
            description={this.props.description}
            link={this.props.link}
            img={this.props.img}/>

      </div>
    )
  }
}
