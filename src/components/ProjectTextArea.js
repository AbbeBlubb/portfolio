import React from "react";

export function ProjectTextArea(props) {
  return (
      <div className="project-text-area">
    
        <div className="project-text-area__header">
          {props.name}
        </div>
        
        <div>
          {props.description}
        </div>
        
        <div className="project-text-area__link-wrap">
          <a
              href={props.href}
              target="_blank"
              onClick="return false">
            <div>
              See the project
            </div>
          </a>
        </div>
      
      </div>
  )
}
