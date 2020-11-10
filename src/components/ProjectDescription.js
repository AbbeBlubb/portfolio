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

          <div className="project-text-area__link-wrap">
            {props.linkTextGui && (
              <a
                className={"project-text-area__link"}
                href={props.linkUrlGui}
                target="_blank"
                onKeyDown={event => {
                  event.stopPropagation();
                  return false;
                }}
                onClick={"return false"}
              >
                {props.linkTextGui}
              </a>
            )}
            {props.linkTextGui && <br />}

            {props.linkTextCodeFrontend && (
              <a
                className={"project-text-area__link"}
                href={props.linkUrlCodeFrontend}
                target="_blank"
                onKeyDown={event => {
                  event.stopPropagation();
                  return false;
                }}
                onClick={"return false"}
              >
                {props.linkTextCodeFrontend}
              </a>
            )}
            {props.linkTextCodeFrontend && <br />}

            {props.linkTextCodeBackend && (
              <a
                className={"project-text-area__link"}
                href={props.linkUrlCodeBackend}
                target="_blank"
                onKeyDown={event => {
                  event.stopPropagation();
                  return false;
                }}
                onClick={"return false"}
              >
                {props.linkTextCodeBackend}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
