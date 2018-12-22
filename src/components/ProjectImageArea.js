import React from "react";

export function ProjectImageArea(props) {
  return (
      <div className="project-image-area">
        <div className="project-image-area__img-wrap">
          <img
              src={props.src}
              alt="Project"/>
        </div>
      </div>
  )
}
