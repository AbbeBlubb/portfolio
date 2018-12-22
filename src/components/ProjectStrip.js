import React from "react";

export function ProjectStrip(props) {
  return <div className="project-strip"><span className="project-strip__name">{props.name}</span>/ {props.short}</div>
}
