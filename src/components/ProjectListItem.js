import React from 'react';
import { ProjectStrip } from './ProjectStrip';
import { ProjectDescription } from './ProjectDescription';
import AnimateHeight from 'react-animate-height';

export class ProjectListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projectDescriptionHeight: 0
    };
  }

  toggleProject = () => {
    const { projectDescriptionHeight } = this.state;
    this.setState({
      projectDescriptionHeight: projectDescriptionHeight === 0 ? 'auto' : 0
    });
  }

  handleKeyDown = event => {
    // Capture space and enter. Note: if only 'event.keyCode === 32 || 13', then '|| 13' will evaluate to 'or true', thus always fulfill the if-statement
    if(event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      this.toggleProject();
    }
  }

  render() {
    return (
      <article
        className="project-list-item"
        style={{ backgroundColor: this.props.backgroundColor, backgroundImage: "url(\"" + this.props.backgroundImage.url + "\")"}}
        onClick={this.toggleProject}
        onKeyDown={event => this.handleKeyDown(event)}
      >

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
    );
  }
}
