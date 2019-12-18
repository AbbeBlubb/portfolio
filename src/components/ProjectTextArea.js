import React from 'react';

export function ProjectTextArea(props) {
  return (
    <div className="project-text-area">
      {/*
      <div className="project-text-area__header">
        {props.name}
      </div>
      */}
      <div>
        {props.description}
      </div>

      {props.linkText && (
        <div className="project-text-area__link-wrap">
          <a
            className={'project-text-area__link'}
            href={props.linkUrl}
            target="_blank"
            onKeyDown={event => {
              event.stopPropagation();
              return false;
            }}
            onClick={'return false'}
            >
            {props.linkText}
          </a>
        </div>
      )}

    </div>
  );
}
