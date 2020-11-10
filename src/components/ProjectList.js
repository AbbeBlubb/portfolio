import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { projectText } from '../assets/texts/projectText';
import { ProjectListItem } from './ProjectListItem';
import { backgroundColor, backgroundImages } from '../assets/background-images';

export class ProjectList extends React.Component {
  static contextType = LanguageContext;

  render() {

    const language = this.context.language;

    return (
      <section
        className="project-list"
        ref={this.props.refProp}> {/*Attatch the given ref to child. This ref is for the Header button */}

        {projectText[language].map(project => (
          <ProjectListItem
            key={project.id}
            id={project.id}
            name={project.name}
            short={project.short}
            description={project.description}
            linkUrl={project.linkUrl}
            linkText={project.linkText}
            img={project.imgFileName}
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImages[Math.floor(Math.random()*backgroundImages.length)]} />
        ))}
      </section>
    );
  }
}
