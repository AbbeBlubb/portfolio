import React from "react"
import { ProjectStrip } from "./ProjectStrip";
import { ProjectDescription } from "./ProjectDescription";
import AnimateHeight from "react-animate-height";

export class ProjectListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projectDescriptionHeight: 0
    }
  }

  toggleProject = () => {
    const { projectDescriptionHeight } = this.state;
    this.setState({
      projectDescriptionHeight: projectDescriptionHeight === 0 ? 'auto' : 0
    })
  }

  render() {
    return (
      <article
        className="project-list-item"
        style={{ backgroundColor: this.props.backgroundColor, backgroundImage: "url(\"" + this.props.backgroundImage.url + "\")"}}
        onClick={this.toggleProject}>
  <div className="project-list-item__strip-and-description-wrapper">
        <ProjectStrip
            projectIsVisible={this.state.projectDescriptionHeight === 0 ? false : true}
            name={this.props.name}
            short={this.props.short}/>
  
        <AnimateHeight
          duration={500}
          height={this.state.projectDescriptionHeight}>
          <ProjectDescription
              projectIsVisible={this.state.projectDescriptionHeight}
              name={this.props.name}
              description={this.props.description}
              linkUrl={this.props.linkUrl}
              linkText={this.props.linkText}
              img={this.props.img}/>
        </AnimateHeight>
</div>
      </article>
    )
  }
}
