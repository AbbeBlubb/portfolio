import React from "react";

export function ProjectStrip(props) {
  return(
    <div className="project-strip">
      <div
        className="project-strip__text-wrap"
        style={{ backgroundColor: props.projectIsVisible && '#fbe5c6'}}
      >
        <span className='project-strip__text-line'>
          <span className="project-strip__name">{props.name}</span>
          <span>/&nbsp;{props.short}</span>
        </span>
      </div>
    </div>
  )
}
