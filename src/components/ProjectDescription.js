import React from "react";

export function ProjectDescription(props) {
  return (
    <article className="project-description">
      <div className="project-description__content">
        <div className="project-image-area">
          <div className="project-image-area__img-wrap">
            <img
              src={require(`../assets/project-images/${props.img}`)}
              alt="Project"
            />
          </div>
        </div>

        <div className="project-text-area">
          <div>{props.description}</div>

          {props.linkText && (
            <div className="project-text-area__link-wrap">
              <a
                className={"project-text-area__link"}
                href={props.linkUrl}
                target="_blank"
                onKeyDown={event => {
                  event.stopPropagation();
                  return false;
                }}
                onClick={"return false"}
              >
                {props.linkText}
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
