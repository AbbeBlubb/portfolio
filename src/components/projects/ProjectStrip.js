import React from "react";

export function ProjectStrip(props) {
  return(
    <div className="project-strip">
      <div tabIndex={0} className="project-strip__text-wrap">
        <span
            className='project-strip__text-line'
            style={{ backgroundColor: props.projectIsVisible && '#fbe5c6'}}>
          <span className="project-strip__name">{props.name}</span>
          <span>/&nbsp;{props.short}</span>
        </span>
      </div>
    </div>
  );
}
