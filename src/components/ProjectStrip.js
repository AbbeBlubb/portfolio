import React from "react";

export function ProjectStrip(props) {
  return(
    <div className="project-strip">
      <div className="project-strip__text-wrap">
        <span className="project-strip__name">
          &nbsp;{props.name}
        </span>
        /&nbsp;{props.short}&nbsp;
      </div>
    </div>
  )
}
