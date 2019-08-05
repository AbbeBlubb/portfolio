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
      <article
          className="project-list-item"
          style={{ backgroundColor: this.props.backgroundColor, backgroundImage: "url(\"" + this.props.backgroundImage.url + "\")"}}
          onClick={this.toggleProject}>
  
        <ProjectStrip
            projectIsVisible={this.state.projectIsVisible}
            name={this.props.name}
            short={this.props.short}/>
  
        <ProjectDescription
            projectIsVisible={this.state.projectIsVisible}
            name={this.props.name}
            description={this.props.description}
            linkUrl={this.props.linkUrl}
            linkText={this.props.linkText}
            img={this.props.img}/>

      </article>
    )
  }
}
