import React from "react"

export function ProjectDescription(props) {

  return (
      <div className={`project-description-dropdown ${props.projectIsVisible && 'project-description-visible'}`}>
    <div className={`project-description`}>
      <div className="project-description__inner">
        
        <div className="img-container">
          <div className="img-wrap">
            <img
              className="img"
              src={require(`../assets/project-images/${props.img}`)}
              alt="Project" />
          </div>
        </div>
        
        <div className="text">
          
          <div className="header">
            {props.name}
          </div>
        
          <div>
            {props.description}
          </div>
          
          <div className="link">
            <a
              href={props.link}
              target="_blank"
              onClick="return false">
              <div>
                See the project
              </div>
            </a>
          </div>
          
        </div>
        
      </div>
    </div>
    </div>
  )
}
